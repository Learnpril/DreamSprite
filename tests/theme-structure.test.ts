import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");

function readProjectFile(relativePath: string): string {
  const fullPath = resolve(ROOT, relativePath);
  return readFileSync(fullPath, "utf-8");
}

// ---------------------------------------------------------------------------
// 6.1 — Theme file structure unit tests
// Validates: Requirements 1.1–1.5, 2.1–2.4, 4.1, 5.1, 6.1, 9.1, 9.2, 11.1
// ---------------------------------------------------------------------------
describe("Theme file structure", () => {
  it("src/styles/custom.css exists", () => {
    expect(existsSync(resolve(ROOT, "src/styles/custom.css"))).toBe(true);
  });

  describe("CSS custom properties (palette)", () => {
    const css = readProjectFile("src/styles/custom.css");

    it("sets primary background --sl-color-gray-6 to #0f0f1a", () => {
      expect(css).toMatch(/--sl-color-gray-6:\s*#0f0f1a/i);
    });

    it("sets secondary background --sl-color-gray-5 to #1a1a2e", () => {
      expect(css).toMatch(/--sl-color-gray-5:\s*#1a1a2e/i);
    });

    it("sets --sl-color-accent-low to #1a1a2e", () => {
      expect(css).toMatch(/--sl-color-accent-low:\s*#1a1a2e/i);
    });

    it("sets body text --sl-color-white to #e0e0ff", () => {
      expect(css).toMatch(/--sl-color-white:\s*#e0e0ff/i);
    });

    it("sets body text --sl-color-gray-1 to #e0e0ff", () => {
      expect(css).toMatch(/--sl-color-gray-1:\s*#e0e0ff/i);
    });

    it("sets secondary text --sl-color-gray-2 to #b0b0d8", () => {
      expect(css).toMatch(/--sl-color-gray-2:\s*#b0b0d8/i);
    });

    it("sets accent --sl-color-accent to #c9a0dc", () => {
      expect(css).toMatch(/--sl-color-accent:\s*#c9a0dc/i);
    });
  });

  describe("Font declarations", () => {
    const css = readProjectFile("src/styles/custom.css");

    it("declares Playfair Display for headings", () => {
      expect(css).toContain("Playfair Display");
    });

    it("declares JetBrains Mono for code via --sl-font-mono", () => {
      expect(css).toMatch(/--sl-font-mono:.*JetBrains Mono/);
    });

    it("declares Inter for body via --sl-font", () => {
      expect(css).toMatch(/--sl-font:.*Inter/);
    });
  });

  describe("Callout styling", () => {
    const css = readProjectFile("src/styles/custom.css");

    it("styles .starlight-aside with gold border #d4af37", () => {
      expect(css).toMatch(/\.starlight-aside\s*\{[^}]*#d4af37/is);
    });
  });

  describe("Image styling", () => {
    const css = readProjectFile("src/styles/custom.css");

    it("centers images with max-width 90%", () => {
      expect(css).toMatch(/max-width:\s*90%/);
    });

    it("applies lavender border or glow to content images", () => {
      expect(css).toMatch(/\.sl-markdown-content img[^{]*\{[^}]*border/is);
    });
  });

  describe("Sidebar overrides", () => {
    const css = readProjectFile("src/styles/custom.css");

    it("applies Playfair Display to .site-title", () => {
      expect(css).toMatch(/\.site-title\s*\{[^}]*Playfair Display/is);
    });
  });

  describe("Code block styling", () => {
    const css = readProjectFile("src/styles/custom.css");

    it("sets code block background to #1a1a2e", () => {
      expect(css).toMatch(/pre[^{]*\{[^}]*#1a1a2e/is);
    });
  });
});

// ---------------------------------------------------------------------------
// 6.1 continued — astro.config.mjs verification
// Validates: Requirements 11.1, 2.1, 2.3
// ---------------------------------------------------------------------------
describe("Astro configuration", () => {
  const config = readProjectFile("astro.config.mjs");

  it("references the custom CSS file", () => {
    expect(config).toContain("./src/styles/custom.css");
  });

  it("loads Google Fonts stylesheet for Playfair Display and JetBrains Mono", () => {
    expect(config).toContain("fonts.googleapis.com");
    expect(config).toContain("Playfair+Display");
    expect(config).toContain("JetBrains+Mono");
  });

  it("includes preconnect links for Google Fonts", () => {
    expect(config).toContain("fonts.gstatic.com");
  });
});

// ---------------------------------------------------------------------------
// 6.2 — Landing page and build output
// Validates: Requirements 3.1, 3.2, 3.3
// ---------------------------------------------------------------------------
describe("Landing page", () => {
  const indexMdx = readProjectFile("src/content/docs/index.mdx");

  it('contains hero tagline "Dreaming up game art with AI"', () => {
    expect(indexMdx).toContain("Dreaming up game art with AI");
  });

  it("uses splash template for the landing page", () => {
    expect(indexMdx).toMatch(/template:\s*splash/);
  });

  it("includes a Get Started call-to-action linking to getting-started", () => {
    expect(indexMdx).toContain("Get Started");
    expect(indexMdx).toContain("/getting-started/");
  });
});

// ---------------------------------------------------------------------------
// 6.2 continued — Build output verification
// Validates: Requirements 3.1, 3.2, 3.3
// ---------------------------------------------------------------------------
describe("Build output", () => {
  it("dist/index.html exists", () => {
    expect(existsSync(resolve(ROOT, "dist/index.html"))).toBe(true);
  });

  describe("themed HTML content", () => {
    const html = readProjectFile("dist/index.html");

    it("contains the DreamSprite site title", () => {
      expect(html).toContain("DreamSprite");
    });

    it("contains a hero section", () => {
      expect(html).toMatch(/class="[^"]*hero[^"]*"/);
    });

    it("contains a Get Started call-to-action linking to getting-started", () => {
      expect(html).toContain("Get Started");
      expect(html).toContain("/getting-started/");
    });

    it("includes the themed CSS stylesheet", () => {
      expect(html).toMatch(/<link[^>]+stylesheet[^>]+\.css/);
    });

    it("uses dark theme by default", () => {
      expect(html).toMatch(/data-theme="dark"/);
    });
  });
});
