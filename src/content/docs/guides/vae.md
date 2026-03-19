---
title: VAE
description: Fixing color/contrast weirdness - baked-in vs custom, when to swap.
---

VAEs (Variational Autoencoders) are a small but crucial part of the Stable Diffusion pipeline. They handle the conversion between the latent space (where the magic diffusion happens) and the final pixel image you see.

In simple terms: the VAE is responsible for **encoding** your input image into a compressed latent representation (for img2img or inpainting) and **decoding** the latent output back into a colorful, detailed image. A good VAE makes your generations look sharp, vibrant, and natural; a bad or mismatched one can make them washed out, dull, artifact-heavy, or low-contrast.

Most modern checkpoints (especially SDXL, Pony, Flux) have a **baked-in VAE** that's already tuned to the model - so you often don't need to swap it. But sometimes a custom VAE gives noticeably better results (richer colors, sharper details, better skin tones).

## How VAEs Differ from Other Components

- **Vs Checkpoints**: The checkpoint is the full diffusion model (U-Net + CLIP). The VAE is just the encoder/decoder part - much smaller (usually 100-500 MB).
- **Vs Embeddings/LoRAs**: Embeddings tweak text interpretation; LoRAs tweak generation layers. VAEs only affect the final image decode/encode - no influence on prompt understanding or core style.
- **When to use a custom VAE**:
  - Colors look muted or grayish
  - Details (hair, skin texture, eyes) seem soft/blurry
  - Contrast is too low/high
  - You're using an older checkpoint with a weak built-in VAE

## How to Use VAEs in ComfyUI

1. **Download**
   - Civitai: https://civitai.com/models?types=VAE - filter by "VAE". Look for SDXL-specific ones if using SDXL bases.
   - Hugging Face: Many official VAEs live here (e.g., stabilityai/sd-vae-ft-mse).

2. **Place the file**
   - Drop the .safetensors or .pt file into:
     `ComfyUI\models\vae\`
     (Create the folder if needed - ComfyUI scans it automatically.)

3. **Load in Workflow**
   - Use the **Load VAE** node (or **Load Checkpoint with VAE** for convenience).
   - Connect the VAE output to your **VAE Decode** node (the one that turns latent into image).
   - If using **Load Checkpoint**, many models auto-use their baked-in VAE - but you can override with a custom one via the "vae_name" input.

4. **Quick Test**
   Generate with the baked-in VAE, then swap to a custom one, and compare colors/contrast/detail. If the custom one looks better, keep it!

## Popular VAEs in 2026

These are widely recommended on Civitai and community forums:

- **sd-vae-ft-mse** (Stability AI official)
  The go-to for SD 1.5 and many SDXL models. Clean, balanced colors, good detail. Often the default baked-in.

- **vae-ft-mse-840000-ema-pruned**
  Slightly sharper and more vibrant than the basic one. Popular upgrade for SDXL/Pony.

- **kl-f8-anime2**
  Anime-tuned: richer colors, better saturation for anime/illustration models (Nova Anime XL, Pony merges).

- **ClearVAE / Anything-VAE**
  Very clean decode, minimal artifacts, great for realistic or mixed styles.

- **Flux-specific VAEs** (if using Flux models)
  Flux often uses its own - but community-tuned versions improve contrast/detail.

Pro tip: Most SDXL checkpoints (Juggernaut, Nova series, etc.) work best with their built-in VAE. Only swap if you notice issues.

## Quick Tips for VAEs

- **Don't over-swap**: If the built-in VAE looks good, stick with it - custom ones can sometimes introduce subtle artifacts.
- **Tiling VAEs**: Some are marked "tiling" - useful for seamless textures (backgrounds, patterns).
- **VRAM**: VAEs are small; swapping them costs almost no performance.
- **Batch testing**: Generate the same seed/prompt with different VAEs to compare.
- **Negative prompt synergy**: Pair a good VAE with strong negatives (e.g., EasyNegative) for even cleaner results.

VAEs are the "final polish" step - a small change here can make your generations pop.
