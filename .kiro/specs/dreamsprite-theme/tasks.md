# Implementation Plan

- [x] 1. Create custom CSS file with DreamSprite color palette and typography
  - [x] 1.1 Create `src/styles/custom.css` with Starlight CSS custom property overrides
    - Define `:root` block overriding `--sl-color-accent-low`, `--sl-color-accent-high`, `--sl-color-white`, `--sl-color-gray-1` through `--sl-color-gray-6`, `--sl-color-black` with the DreamSprite palette
    - Set `--sl-color-accent-low: #1A1A2E`, `--sl-color-accent-high: #C9A0DC`, `--sl-color-white: #E0E0FF`, `--sl-color-gray-6: #0F0F1A`, etc.
    - Add font-family overrides: `--sl-font` for Inter/system sans, `--sl-font-mono` for JetBrains Mono, and heading font-family for Playfair Display
    - Set body font-size to ~1.05rem (17px) and line-height to 1.7
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 2.1, 2.2, 2.3, 2.4_

  - [x] 1.2 Write property test: WCAG AA contrast ratio for all palette pairings
    - **Property 1: WCAG AA contrast ratio for all palette pairings**
    - **Validates: Requirements 8.1**
    - Generate random pairings from the theme's text/background color sets and verify each meets 4.5:1 minimum contrast ratio

  - [x] 1.3 Write property test: CSS custom property round-trip consistency
    - **Property 2: CSS custom property round-trip consistency**
    - **Validates: Requirements 11.2, 11.3**
    - Generate random valid CSS custom property names and values, serialize to string, parse back, and verify equivalence

- [x] 2. Update Astro config with custom CSS and Google Fonts
  - [x] 2.1 Update `astro.config.mjs` to register custom CSS and load fonts
    - Add `customCss: ['./src/styles/custom.css']` to Starlight config
    - Add `head` entries for Google Fonts preconnect and stylesheet links (Playfair Display 400/700, JetBrains Mono 400/500)
    - Keep existing sidebar configuration intact
    - _Requirements: 2.1, 2.3, 11.1_

- [x] 3. Style decorative effects and component overrides
  - [x] 3.1 Add starry background overlay and heading glow effects to custom CSS
    - Add `body::before` pseudo-element with low-opacity radial-gradient dots creating a faint star field
    - Add text-shadow glow on h1/h2 headings using the lavender-purple accent color
    - Add gentle glow transition on hover for links, buttons, and cards
    - _Requirements: 7.1, 7.2_

  - [x] 3.2 Add callout/aside parchment styling to custom CSS
    - Style Starlight's `.starlight-aside` with gold border (#D4AF37), subtle warm-tinted background
    - Add hover glow effect on callout boxes
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 3.3 Add image styling to custom CSS
    - Center content images with max-width 90%
    - Add subtle lavender border/glow around images
    - _Requirements: 9.1, 9.2_

  - [x] 3.4 Add sidebar styling overrides to custom CSS
    - Style sidebar title with Playfair Display serif font
    - Set sidebar link colors to #B0B0D8 default, #C9A0DC on hover
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 3.5 Add code block styling enhancements to custom CSS
    - Ensure code blocks use #1A1A2E background
    - Apply lavender-tinted syntax highlighting adjustments
    - _Requirements: 4.1, 4.3_

- [ ] 4. Update landing page hero and footer
  - [ ] 4.1 Update `src/content/docs/index.mdx` with new hero tagline and gradient styling
    - Change hero tagline to "Dreaming up game art with AI"
    - Add CSS for dreamy gradient background on the hero section
    - _Requirements: 3.1, 3.2, 3.3_

  - [ ] 4.2 Add footer with credits and social links
    - Add footer content with credits for Astro, Obsidian, and Netlify
    - Add social links styled with accent colors
    - Add constellation decorative pattern to footer via CSS
    - _Requirements: 10.1, 10.2, 7.3_

- [ ] 5. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Write tests for theme structure and build output
  - [ ]\* 6.1 Write unit tests for theme file structure
    - Verify `src/styles/custom.css` exists and contains expected CSS custom properties
    - Verify `astro.config.mjs` references the custom CSS file and Google Fonts
    - Verify CSS contains DreamSprite palette values and font declarations
    - Verify callout styling with gold border, image styling, sidebar overrides
    - _Requirements: 1.1–1.5, 2.1–2.4, 4.1, 5.1, 6.1, 9.1, 9.2, 11.1_

  - [ ]\* 6.2 Write unit tests for landing page and build output
    - Verify hero tagline "Dreaming up game art with AI" in index.mdx
    - Verify build output contains themed HTML
    - _Requirements: 3.1, 3.2, 3.3_

- [ ] 7. Final Checkpoint
  - Ensure all tests pass, ask the user if questions arise.
