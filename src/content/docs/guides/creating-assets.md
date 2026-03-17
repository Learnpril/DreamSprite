---
title: Creating Assets
description: Learn how to create art and assets for your games using DreamSprite.
---

## Overview

DreamSprite provides a streamlined workflow for creating 2D game assets. This guide walks you through the basics of asset creation.

## Creating a Sprite

To create a new sprite, define it in a configuration file:

```json
{
  "name": "player",
  "width": 32,
  "height": 32,
  "frames": 4
}
```

Each sprite configuration specifies the dimensions and the number of animation frames.

## Exporting Assets

Once your sprite is ready, export it using the CLI:

```bash
npx dreamsprite export --input player.json --output dist/sprites/
```

This generates optimized image files in the output directory, ready to use in your game engine.

## Organizing Your Assets

Keep your project tidy by grouping assets into folders:

```
assets/
├── characters/
│   ├── player.json
│   └── enemy.json
├── environment/
│   ├── tree.json
│   └── rock.json
└── ui/
    └── button.json
```

A consistent folder structure makes it easier to manage assets as your project grows.

## Tips

- Use power-of-two dimensions (16, 32, 64) for best compatibility with game engines.
- Keep animation frame counts low for small sprites to reduce file size.
- Name your assets descriptively so they are easy to find later.
