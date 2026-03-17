# Implementation Plan

- [x] 1. Scaffold Astro project with Starlight
  - [x] 1.1 Initialize the Astro project with Starlight starter
    - Run `npm create astro@latest` with the Starlight template to scaffold the project in the current workspace
    - Configure `package.json` with Astro and `@astrojs/starlight` as dependencies
    - Run `npm install` to install all dependencies
    - _Requirements: 1.1, 1.2_

  - [x] 1.2 Configure `astro.config.mjs` with DreamSprite branding and sidebar
    - Set site title to "DreamSprite"
    - Define sidebar structure with "Getting Started" and "Guides" sections
    - Ensure Starlight integration is properly registered
    - _Requirements: 1.1, 4.1, 2.3_

  - [x] 1.3 Verify the project builds successfully
    - Run `npm run build` and confirm `dist/` directory is produced with zero errors
    - _Requirements: 1.3_

- [x] 2. Create documentation content
  - [x] 2.1 Create the landing page at `src/content/docs/index.mdx`
    - Add hero section with DreamSprite title, tagline, and call-to-action button linking to getting-started
    - Use the `splash` template for the landing page
    - Include navigation links to main documentation sections
    - _Requirements: 3.1, 3.2, 3.3_

  - [x] 2.2 Create the Getting Started guide at `src/content/docs/getting-started.md`
    - Write starter content with headings, paragraphs, and code blocks demonstrating proper Markdown formatting
    - Include frontmatter with `title` field
    - _Requirements: 7.1, 7.3, 2.4_

  - [x] 2.3 Create additional documentation pages for content organization
    - Create `src/content/docs/guides/creating-assets.md` as an example guide page

    - Include frontmatter with `title` field and sample content with headings, paragraphs, and code blocks
    - _Requirements: 7.2, 7.3, 2.1, 2.2_

- [x] 3. Configure Netlify deployment
  - [x] 3.1 Create `netlify.toml` configuration file
    - Set build command to `npm run build`
    - Set publish directory to `dist`
    - _Requirements: 8.1, 8.2, 8.3_

  - [x] 3.2 Verify build output is Netlify-compatible
    - Run `npm run build` and confirm `dist/` contains static HTML files
    - _Requirements: 8.2, 1.3_

- [ ] 4. Checkpoint
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Set up testing infrastructure and write tests
  - [ ] 5.1 Set up Vitest and fast-check
    - Install `vitest` and `fast-check` as dev dependencies
    - Create `vitest.config.ts` if needed
    - Create `tests/` directory
    - _Requirements: 1.2_
  - [ ]\* 5.2 Write unit tests for project structure
    - Verify `astro.config.mjs` exists and contains Starlight config
    - Verify `package.json` contains required dependencies
    - Verify `netlify.toml` has correct build command and publish directory
    - Verify `src/content/docs/` directory exists with expected content files
    - _Requirements: 1.1, 1.2, 2.1, 7.1, 7.2, 8.1_
  - [ ]\* 5.3 Write unit tests for build output
    - Run build and verify `dist/` directory contains expected HTML files
    - Verify landing page HTML contains hero section and DreamSprite branding
    - Verify rendered pages contain proper headings from frontmatter titles
    - _Requirements: 1.3, 3.1, 3.3, 4.1, 4.3_
  - [ ]\* 5.4 Write property test: Content file to URL path mapping
    - **Property 1: Content file to URL path mapping**
    - **Validates: Requirements 2.2**
    - Generate random valid file paths, verify the build output maps them to corresponding URL paths
  - [ ]\* 5.5 Write property test: Frontmatter title appears in rendered output
    - **Property 2: Frontmatter title appears in rendered output**
    - **Validates: Requirements 2.4**
    - Generate random title strings in frontmatter, verify they appear in the rendered HTML heading
  - [ ]\* 5.6 Write property test: Valid frontmatter passes schema validation
    - **Property 3: Valid frontmatter passes schema validation**
    - **Validates: Requirements 6.1**
    - Generate random valid frontmatter objects, verify they pass Starlight's content collection schema validation

- [ ] 6. Final Checkpoint
  - Ensure all tests pass, ask the user if questions arise.
