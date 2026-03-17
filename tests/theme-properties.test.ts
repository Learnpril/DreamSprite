import { describe, it, expect } from "vitest";
import * as fc from "fast-check";

// **Feature: dreamsprite-theme, Property 1: WCAG AA contrast ratio for all palette pairings**
// **Validates: Requirements 8.1**

// DreamSprite theme palette colors
const TEXT_COLORS = [
  { name: "Body Text (pale moonlight)", hex: "#E0E0FF" },
  { name: "Secondary Text (dusty lavender)", hex: "#B0B0D8" },
  { name: "Accent (lavender-purple)", hex: "#C9A0DC" },
  { name: "Gold (callout borders)", hex: "#D4AF37" },
] as const;

const BACKGROUND_COLORS = [
  { name: "Primary Background", hex: "#0F0F1A" },
  { name: "Secondary Background", hex: "#1A1A2E" },
  { name: "Tertiary Background", hex: "#16213E" },
] as const;

/**
 * Parse a hex color string to its RGB components.
 * Supports #RGB and #RRGGBB formats.
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const cleaned = hex.replace("#", "");
  let r: number, g: number, b: number;
  if (cleaned.length === 3) {
    r = parseInt(cleaned[0] + cleaned[0], 16);
    g = parseInt(cleaned[1] + cleaned[1], 16);
    b = parseInt(cleaned[2] + cleaned[2], 16);
  } else {
    r = parseInt(cleaned.slice(0, 2), 16);
    g = parseInt(cleaned.slice(2, 4), 16);
    b = parseInt(cleaned.slice(4, 6), 16);
  }
  return { r, g, b };
}

/**
 * Compute relative luminance per WCAG 2.0 formula.
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
function relativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);
  const [rs, gs, bs] = [r / 255, g / 255, b / 255].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4),
  );
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Compute contrast ratio between two colors per WCAG 2.0.
 * https://www.w3.org/TR/WCAG20/#contrast-ratiodef
 */
function contrastRatio(fg: string, bg: string): number {
  const l1 = relativeLuminance(fg);
  const l2 = relativeLuminance(bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Serialize a CSS custom property declaration to a string.
 */
function serializeCssProperty(name: string, value: string): string {
  return `${name}: ${value};`;
}

/**
 * Parse a CSS custom property declaration string back to name and value.
 * Expects format: "--name: value;"
 */
function parseCssProperty(declaration: string): {
  name: string;
  value: string;
} {
  const match = declaration.match(/^(--[^:]+):\s*(.*);$/s);
  if (!match) {
    throw new Error(`Invalid CSS custom property declaration: ${declaration}`);
  }
  return { name: match[1], value: match[2] };
}

/**
 * Arbitrary for valid CSS custom property names.
 * Names start with "--" followed by one or more alphanumeric/hyphen characters.
 */
const cssNameChars = "abcdefghijklmnopqrstuvwxyz0123456789-".split("");
const cssPropertyNameArb = fc
  .array(fc.constantFrom(...cssNameChars), { minLength: 1, maxLength: 30 })
  .map((chars) => chars.join(""))
  .filter((s) => /^[a-z]/.test(s) && !s.endsWith("-"))
  .map((s) => `--${s}`);

/**
 * Arbitrary for valid CSS property values.
 * Generates realistic CSS values: colors, sizes, font stacks, keywords.
 */
const cssValueChars = "abcdefghijklmnopqrstuvwxyz".split("");
const hexChars = "0123456789abcdef".split("");
const cssPropertyValueArb = fc.oneof(
  // Hex colors
  fc
    .array(fc.constantFrom(...hexChars), { minLength: 6, maxLength: 6 })
    .map((chars) => `#${chars.join("")}`),
  // Pixel values
  fc.integer({ min: 0, max: 999 }).map((n) => `${n}px`),
  // Rem values
  fc
    .float({ min: Math.fround(0.1), max: Math.fround(10), noNaN: true })
    .map((n) => `${n.toFixed(2)}rem`),
  // Keywords
  fc.constantFrom(
    "inherit",
    "initial",
    "unset",
    "none",
    "auto",
    "transparent",
    "currentColor",
  ),
  // Simple strings (font names, etc.)
  fc
    .array(fc.constantFrom(...cssValueChars), { minLength: 1, maxLength: 20 })
    .map((chars) => chars.join("")),
);

describe("DreamSprite Theme — Property-Based Tests", () => {
  it("Property 1: all text/background palette pairings meet WCAG AA 4.5:1 contrast ratio", () => {
    // Arbitrary that picks a random text color from the theme palette
    const textColorArb = fc.constantFrom(...TEXT_COLORS);
    // Arbitrary that picks a random background color from the theme palette
    const bgColorArb = fc.constantFrom(...BACKGROUND_COLORS);

    fc.assert(
      fc.property(textColorArb, bgColorArb, (textColor, bgColor) => {
        const ratio = contrastRatio(textColor.hex, bgColor.hex);
        expect(ratio).toBeGreaterThanOrEqual(4.5);
      }),
      { numRuns: 100 },
    );
  });

  // **Feature: dreamsprite-theme, Property 2: CSS custom property round-trip consistency**
  // **Validates: Requirements 11.2, 11.3**
  it("Property 2: CSS custom property round-trip — serialize then parse preserves name and value", () => {
    fc.assert(
      fc.property(cssPropertyNameArb, cssPropertyValueArb, (name, value) => {
        const serialized = serializeCssProperty(name, value);
        const parsed = parseCssProperty(serialized);
        expect(parsed.name).toBe(name);
        expect(parsed.value).toBe(value);
      }),
      { numRuns: 100 },
    );
  });
});
