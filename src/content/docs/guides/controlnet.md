---
title: ControlNet
description: Pose, lineart, depth, canny - locking composition with OpenPoseXL2 and DWPose.
---

ControlNet is one of the most powerful tools in ComfyUI for giving you precise control over the structure, pose, and composition of your generations. Instead of hoping the model "guesses" the right pose or layout, you feed it an extra image (a pose map, edge map, depth map, etc.) that acts like a blueprint.

It works by adding a separate "control" path to the diffusion process. While the normal prompt guides style and content, ControlNet guides the actual geometry, edges, or depth - making results far more predictable and consistent.

In ComfyUI you load ControlNet models via the **ControlNet Loader** node (or ControlNet Aux nodes for preprocessing). You then connect it to your KSampler with adjustable **strength** and **start/end percentages** (more on that below).

## Different Types of ControlNet and What They're Used For

Here are the most popular types in 2026 (all available on Civitai and Hugging Face):

- **OpenPose** (Pose / Skeleton)
  Use: Locks body pose, hand positions, and basic limb placement. Perfect for character duos, dynamic action, or consistent multi-person scenes.
  Input: A pose image (skeleton map) created manually (OpenPose Editor) or automatically (DWPose node).
  Best for: Anime characters, realistic people, group shots.
  SDXL version: OpenPoseXL2 or thibaud's models.

- **Depth** (Depth Map)
  Use: Controls 3D-like depth and perspective (foreground/background separation). Great for scenes with strong spatial relationships or when you want accurate distance.
  Input: A grayscale depth map (generated from any image via Depth Anything or MiDaS nodes).
  Best for: Landscapes, interior scenes, accurate composition.

- **Canny** (Edge Detection)
  Use: Locks sharp outlines and structural edges. Ideal when you want to preserve exact shapes from a reference image.
  Input: Edge map from a photo or sketch (Canny preprocessor).
  Best for: Architectural elements, mechanical objects, clean line work.

- **Lineart / Anime Lineart**
  Use: Creates or preserves clean, artistic linework (especially anime-style hatching or bold outlines).
  Input: A line drawing or the Lineart preprocessor on an image.
  Best for: Anime/illustration styles, sketch-to-render workflows, finishing passes.

- **Normal Map**
  Use: Controls surface details and lighting direction (bumps, folds, fabric texture).
  Input: Normal map from a 3D model or Normal preprocessor.
  Best for: Clothing folds, skin texture, 3D-render looks.

- **Soft Edge / Scribble**
  Use: Loose, sketchy guidance for creative freedom while still locking major shapes.
  Input: Rough scribble or soft-edge map.
  Best for: Early ideation or artistic freedom.

- **Tile / Reference / IPAdapter** (bonus advanced)
  Use: Reference another image for overall composition, color palette, or style (IPAdapter is especially strong for face/character consistency).
  Best for: Style transfer, character consistency across multiple images.

## When and How to Use ControlNet in Your Process

ControlNet is typically applied **during the denoising step** (inside the KSampler). You control **when** it influences the image with these settings:

- **Strength** (0.0-2.0): How strongly the control image affects the result.
  - 0.8-1.2: Balanced (most common).
  - 1.5+: Very strict (pose locked hard).
  - 0.5 or lower: Gentle guidance.

- **Start/End Percent** (0-1.0): When the ControlNet is active during the 20-50 denoising steps.
  - Early (0.0-0.3): Use for structure/pose (OpenPose, Depth, Canny) - apply at the beginning so the model builds around it.
  - Late (0.5-1.0): Use for finishing details (Lineart, Tile) - apply toward the end for polish.
  - Full range (0.0-1.0): For most standard use.

## Typical Workflow Order

1. Generate or prepare your control image (pose map, edge map, etc.).
2. Load base checkpoint + VAE.
3. Load ControlNet model(s) - you can use 1-3 at once (multi-ControlNet is very powerful).
4. Connect to KSampler with appropriate strength and timing.
5. Add your prompt and negative prompt.
6. Queue - the ControlNet guides the result.

## Pro Tips

- Start with one ControlNet (OpenPose is easiest for beginners).
- Use **preprocessors** (DWPose, Canny, Depth Anything) to turn any reference image into a control map automatically.
- Lower CFG scale (4-7) when using strong ControlNet - it lets the control take priority.
- For multi-person or complex scenes: Combine OpenPose + Depth.
- Test at low resolution first (512x768) to save time, then upscale.
- Common fix: If results look "soft," add a Lineart ControlNet at the end (strength 0.6-0.8, start 0.6).

ControlNet turns "hope the model gets it right" into "I decide exactly where everything goes." It's the difference between random generations and professional-level control.
