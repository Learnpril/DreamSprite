---
title: Models
description: Checkpoints are the soul - anime, realistic, furry, 3D/CGI styles and where to grab them.
---

Models - specifically **checkpoint models** - are the foundation of everything you generate in ComfyUI. They're massive files (usually 2-7 GB) containing the trained neural network weights from Stable Diffusion (or Flux/Pony/SDXL bases). Think of them as the "artist's brain": they decide if your image comes out anime-style, photorealistic, furry, 3D-rendered, or something wild.

In ComfyUI, you load one via the **Load Checkpoint** node (often paired with a VAE node for better colors). Everything else - prompts, LoRAs, ControlNet, samplers - builds on top of this base model. A good checkpoint can make or break your results, so picking the right one is huge.

## Key Things to Know About Checkpoints

- **Base Types in 2026**:
  - **SDXL / Illustrious / NoobAI** - Most popular now; high-res native (1024+), great prompt understanding.
  - **Pony Diffusion XL** - Excellent for anime/furry; uses score_9 tagging for quality.
  - **Flux** - Newer, massive leaps in coherence/realism, but heavier VRAM.
  - **SD 1.5** - Older but still used for specific LoRAs; lower res but fast.

- **File Formats**: Mostly `.safetensors` (safe, fast) or `.ckpt` (older). Always prefer safetensors.

- **Where to Download**:
  - **Civitai** (community king): https://civitai.com/models - Filter by "Checkpoint", sort "Most Downloaded" or "Highest Rated". Read reviews/examples.
  - **Hugging Face** (official/experimental): https://huggingface.co/models?other=stable-diffusion - Good for base models or merges.

## Popular Checkpoints by Style (2026 Picks)

### Anime / Illustrative

- **NoobAI XL** - Currently the community favorite for anime. Based on Illustrious, excellent prompt understanding, vibrant colors, great anatomy. Tons of LoRA support.
- **Animagine XL 3.1** - Clean anime style, good hands, strong at character design. Danbooru tag-friendly.
- **Nova Anime XL** - Versatile anime checkpoint, great for both detailed illustrations and simpler styles. Solid all-rounder.
- **Pony Diffusion V6 XL** - Uses score_9/score_8_up quality tags. Excellent for anime and stylized art. Huge LoRA ecosystem.
- **Kohaku XL** - Beautiful soft anime aesthetic, good for backgrounds and scenic shots.

### Realistic / Photographic

- **Juggernaut XL v9+** - The go-to for photorealism. Incredible skin detail, lighting, and composition. Works great with ControlNet for poses.
- **RealVisXL V5** - Sharp, clean photorealistic output. Good for portraits and product shots.
- **Flux Dev / Schnell** - Newer architecture, massive leap in coherence and text rendering. Heavier on VRAM (needs 12GB+) but stunning results.
- **DreamShaper XL** - Versatile - can do semi-realistic to painterly. Good middle ground if you want flexibility.

### Furry / Anthro

- **Pony Diffusion V6 XL** - Dominant in the furry space. Trained on e621 tags, excellent anatomy for anthro characters. Use score tags for quality control.
- **AutismMix Pony** - Merge based on Pony, tuned for cleaner furry output with better backgrounds.
- **Indigo Furry Mix** - Specialized for furry art with good style variety.

### 3D / CGI Style

- **Juggernaut XL** (with 3D-focused prompting) - Can produce clean 3D-looking renders with the right prompts (e.g., "3d render, octane, unreal engine").
- **DreamShaper XL** - Good at stylized 3D looks, game art aesthetic.
- **AAM XL** - Anime-meets-3D aesthetic, good for game asset style output.
- **Flux** - Excellent at 3D-style coherent scenes with proper prompting.

### Dedicated 3D Generation Models

These aren't traditional image checkpoints - they generate actual 3D meshes (.obj, .glb) from images or text:

- **Hunyuan3D 2.0** - Tencent's image/text-to-3D. High-quality textured meshes, works in ComfyUI via custom nodes. One of the best free options in 2026.
- **TripoSR / Tripo3D** - Fast single-image-to-3D. Good for quick prototyping game assets. Available as ComfyUI nodes.
- **InstantMesh** - Multi-view reconstruction, clean topology. Good for characters.
- **Stable Zero123** - Stability AI's novel view synthesis. Feed one image, get 3D-consistent multi-angle views for reconstruction.
- **CRM (Convolutional Reconstruction Model)** - Fast, decent quality mesh output from single images.

For 3D workflows in ComfyUI, check the [ComfyUI 3D](/guides/comfyui-3d/) guide.

## Quick Start in ComfyUI

1. Download a checkpoint from Civitai (start with **NoobAI XL** for anime or **Juggernaut XL** for realism).
2. Place the `.safetensors` file in `ComfyUI/models/checkpoints/`.
3. In ComfyUI, use the **Load Checkpoint** node and select your model.
4. Pair it with a **CLIP Text Encode** (positive + negative), **KSampler**, **VAE Decode**, and **Save Image**.
5. Hit **Queue Prompt** - done.

Most checkpoints come with recommended settings on their Civitai page (sampler, CFG, resolution). Start there and tweak to taste.

## Pro Tip

Don't hoard 50 checkpoints. Pick 1-2 that match your main style, learn them well, and use LoRAs for variation. You'll get way better results mastering one model than constantly switching. Quality over quantity.
