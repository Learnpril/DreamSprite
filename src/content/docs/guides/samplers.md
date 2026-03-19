---
title: Samplers & Scheduling
description: How samplers and schedulers work in ComfyUI, popular choices in 2026, steps/CFG/denoise settings, and how they interact with ControlNet and prompts.
---

The **KSampler** (or similar sampling nodes) is where the actual image is created in ComfyUI. It takes your prompt conditioning, ControlNet guidance, latent noise, and model weights, then iteratively denoises random noise into a coherent image over a series of steps.

Two main parts control this process:

- **Sampler**: The algorithm that decides how to take each denoising step (e.g., Euler, DPM++, UniPC).
- **Scheduler** (or noise schedule): How the noise level decreases over steps (e.g., normal, Karras, exponential).

Together, they determine speed, quality, detail, and how closely the result follows your prompt and ControlNet.

## Popular Samplers & Schedulers in 2026

ComfyUI includes dozens, but these are the most used and recommended:

- **Euler a** (ancestral)
  Fast, creative, good for artistic/experimental gens. Often produces vibrant, slightly noisy results.
  Pairs well with: Karras scheduler.
  Steps: 20-40.

- **DPM++ 2M Karras**
  The community favorite for balanced quality/speed. Sharp details, good prompt adherence.
  Steps: 20-40.
  Scheduler: Karras (built-in).

- **DPM++ SDE Karras**
  Even sharper and more detailed than 2M, but can be noisier or take longer. Great for realism.
  Steps: 25-50.

- **UniPC / UniPC BH2**
  Very fast convergence (good quality in fewer steps). Excellent for high-res or when VRAM is tight.
  Steps: 15-30.

- **LCM / LCM Sampler** (Latent Consistency Models)
  Ultra-fast (4-8 steps) with distilled models. Great for quick previews or low-step workflows.
  Requires LCM-specific LoRAs/checkpoints.

**Scheduler choices** (often automatic with Karras samplers):

- **Karras**: Smooth, high-quality noise reduction - most popular.
- **Exponential**: Stronger early denoising - good for artistic styles.
- **Normal**: Classic, but often outperformed by Karras.

Quick recommendation for beginners:

- Start with **DPM++ 2M Karras** (20-30 steps) - reliable, good quality, fast enough.
- Switch to **Euler a** for more creative/varied outputs.
- Use **UniPC** when you want speed without losing much quality.

## Key Settings in KSampler

- **Steps**: Number of denoising iterations (20-50 typical).
  - More steps = more detail/refinement (but longer generation time).
  - Fewer steps = faster, sometimes more stylized/noisy.

- **CFG Scale** (Classifier-Free Guidance): How strongly the model follows your prompt (vs random noise).
  - 5-9: Balanced (most common).
  - 7-8: Sweet spot for most models.
  - <5: More creative/random.
  - > 10: Very strict (can cause artifacts or overcooked looks).
  - Tip: Lower CFG (4-6) when using strong ControlNet - lets the control image dominate.

- **Denoise** (for img2img/inpainting): How much to change the input image (0.0-1.0).
  - 0.0: No change (just preview).
  - 0.3-0.5: Gentle refinement (fix small flaws).
  - 0.6-0.8: Big changes while keeping composition.
  - 1.0: Full text-to-image (ignores input).

## How Samplers Interact with ControlNet & Prompts

- **Strong ControlNet** (e.g., OpenPose at 1.0 strength): Lower CFG (5-7) and start ControlNet early (0.0-0.3) - the pose/edges dominate, sampler just fills in details.
- **Weak/no ControlNet**: Higher CFG (8-10) to force prompt adherence.
- **Creative vs precise**: Ancestral samplers (Euler a) + low CFG = more variation; deterministic samplers (DPM++ 2M) + high CFG = closer to prompt.
- **Timing with ControlNet**: Use early ControlNet (pose/depth) for structure, late (lineart/tile) for polish - sampler steps handle the refinement in between.

## Quick Tips

- Always test at low res (512x768) with 20 steps first - saves time.
- Seed: Fix seed for reproducibility, change for variation.
- Batch size: 1 for testing, 4+ when you like the settings.
- Save good combos: Note sampler, steps, CFG, denoise in your Obsidian notes.

Mastering samplers turns "okay" generations into "wow" ones - it's often the last 20% that makes the difference.
