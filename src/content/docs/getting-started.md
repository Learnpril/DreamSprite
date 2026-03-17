---
title: Getting Started
description: Learn how to set up DreamSprite and start creating game assets.
---

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- A code editor such as [VS Code](https://code.visualstudio.com/)

## Installation

Clone the DreamSprite repository and install the dependencies:

```bash
git clone https://github.com/example/dreamsprite.git
cd dreamsprite
npm install
```

## Running the Development Server

Start the local development server to preview your work:

```bash
npm run dev
```

This launches the site at `http://localhost:4321`. Changes you make to content files will be reflected automatically.

## Project Structure

A typical DreamSprite project looks like this:

```
├── src/
│   └── content/
│       └── docs/
│           ├── index.mdx
│           ├── getting-started.md
│           └── guides/
│               └── creating-assets.md
├── astro.config.mjs
├── package.json
└── netlify.toml
```

Content lives in `src/content/docs/`. Each Markdown file becomes a page on the documentation site.

## Next Steps

Now that you have DreamSprite running, head over to the [Creating Assets](/guides/creating-assets/) guide to learn how to build your first game asset.
