---
title: Upscaling & Refinement
description: Techniques to upscale low-res generations to high-res in ComfyUI, including latent upscaling, model-based upscalers, tiled diffusion, iterative refinement, and best practices.
---

Most ComfyUI workflows start with lower resolutions (512x768, 768x1024, or 1024x1024) because generating directly at 4K+ eats VRAM and takes forever. Upscaling turns those base images into crisp, high-res final assets without losing quality - and refinement fixes flaws while adding detail.

There are two main phases:

- **Upscaling**: Increase resolution (e.g., 2x, 4x) while preserving or enhancing sharpness.
- **Refinement**: Iteratively improve details, fix artifacts, add texture via low-denoise img2img passes.

## Why Upscale & Refine?

- Base gens often look good but soft/blurry at higher zoom.
- High-res reveals flaws (hands, faces, edges).
- Refinement adds realism, skin texture, fine details that low-step gens miss.

## Popular Upscaling Methods in ComfyUI (2026)

Here are the most used and effective techniques:

### 1. Simple Latent Upscale (Fastest, Built-in)

- Use **Latent Upscale** or **Upscale Image (Latent)** nodes.
- Scale by 1.5-2x in latent space, then VAE Decode.
- Pros: Very fast, low VRAM.
- Cons: Can be soft/blurry; best as a quick first step.
- Tip: Follow with a small img2img pass (denoise 0.3-0.5) to sharpen.

### 2. Model-Based Upscalers (ESRGAN, Real-ESRGAN, SwinIR, 4x-UltraSharp)

- Load models via **Upscale Image (using Model)** node.
- Popular models (download from Civitai or OpenModelDB):
  - 4x-UltraSharp: Excellent general-purpose 4x upscale - sharp, preserves details.
  - 4x_NMKD-Superscale: Great for realistic/photographic.
  - Real-ESRGAN x4plus / Anime variants: Strong for photos or anime.
  - SwinIR / Swin2SR: Transformer-based, excellent restoration and sharpness.
- Pros: Fast, high quality, no diffusion needed.
- Cons: Can over-sharpen or add halos if mismatched to content.
- Tip: Use for 2x-4x jumps after latent upscale.

### 3. Diffusion-Based / Tiled Upscaling (Ultimate SD Upscale)

- The gold standard for high-quality, creative upscales in 2026.
- Install **ComfyUI_UltimateSDUpscale** custom nodes via Manager.
- Workflow: Tile the image, run low-denoise img2img on each tile, stitch back.
- Key settings:
  - Upscale by: 2-4x
  - Denoise: 0.25-0.5 (low for fidelity, higher for more detail invention)
  - Tile size: 512-1024 (balance quality vs VRAM)
  - ControlNet Tile or Tile Resample for edge consistency
- Pros: Adds real detail/texture (e.g., skin pores, fabric weave), fixes artifacts.
- Cons: Slower, more VRAM.
- Variants: SeedVR2, SUPIR, or Flux-based upscalers for even better results (if you have the models).

### 4. Iterative Img2Img Refinement

- After upscaling, run multiple low-denoise passes to polish.
- Typical chain:
  1. Base image -> upscale 2x (latent or model).
  2. Img2img pass 1: Denoise 0.4-0.6, add "highly detailed, sharp focus" prompt.
  3. Img2img pass 2: Denoise 0.2-0.3, focus on "refine details, better anatomy".
  4. Final pass: Denoise 0.1-0.2 for subtle enhancements.
- Pros: Gradually builds quality, fixes specific flaws (hands, faces).
- Cons: Takes longer - best for final touches.

### 5. Face-Specific Refinement (FaceDetailer, Reactor)

- Use **FaceDetailer** or **Reactor** nodes (from custom packs like ComfyUI Impact Pack).
- Detects faces, runs targeted img2img or restoration (GFPGAN/CodeFormer).
- Great for portraits where faces look off after upscaling.

## Quick Tips & Best Practices

- **Order**: Generate base (low res) -> ControlNet/pose lock -> Sampler -> Upscale -> Refinement passes.
- **Denoise sweet spot**: 0.3-0.5 for most upscales/refinements - higher adds creativity, lower preserves original.
- **ControlNet in upscaling**: Add Tile or Lineart ControlNet (strength 0.4-0.7, late timing) to keep edges sharp.
- **VRAM saving**: Use tiled methods (Ultimate SD Upscale) or lower tile size.
- **Test small**: Always upscale a crop first.
- **Save workflows**: Once you have a good chain (e.g., Ultimate SD + FaceDetailer), save as JSON for reuse.

Upscaling & refinement turns "good enough" into "professional" - it's where the wow factor happens.
