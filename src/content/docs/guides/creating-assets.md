---
title: Checkpoint Models
description: Learn about checkpoint models — the foundation of every generation in ComfyUI — and discover popular models for anime, realistic, furry, 3D, and audio.
---

Checkpoint models are the **heart** of every generation in ComfyUI. They are large `.safetensors` (or `.ckpt`) files that contain the trained neural network weights of a Stable Diffusion model. Everything you generate — poses, characters, styles, lighting — starts from a checkpoint.

Unlike LoRAs or ControlNets (which modify the base), checkpoints define the **foundation style and capabilities**. You load them with the **Load Checkpoint** node (or Load Checkpoint with VAE for SDXL).

## Where to Download Models Locally

- **Civitai** (recommended for community fine-tunes): https://civitai.com/models
  Search → filter by SDXL or Pony → sort by "Most Downloaded" or "Highest Rated". Download the `.safetensors` file and drop it into `ComfyUI\models\checkpoints\`.

- **Hugging Face** (official bases & large experimental models): https://huggingface.co/models?other=stable-diffusion
  Click "Files and versions" → download the main `.safetensors` file.

## Popular Checkpoints by Style (March 2026)

### Anime / 2D / 2.5D

Great for vibrant colors, clean lines, and anime characters.

- **Nova Anime XL – IL V17.0**
  Excellent for colorful anime/illustration with strong character fidelity.
  Civitai: https://civitai.com/models/376130/nova-anime-xl
  (No direct HF mirror — use Civitai)

- **Prefect Pony XL – v6** or **Pony Diffusion XL** base merges
  The gold standard for modern anime-style generation (especially with score_9 prompting).
  Civitai: https://civitai.com/models/439889/prefect-pony-xl

- **AniMerge – Pony XL – v6.0**
  Great for dynamic anime scenes and comics.
  Civitai: https://civitai.com/models/613147/animerge-pony-xl

### Realistic / Photorealistic

Best for lifelike people, skin texture, photography, and cinematic lighting.

- **Juggernaut XL – Ragnarok** (by RunDiffusion)
  The most popular all-rounder SDXL model in 2026 — incredible hands, poses, and photorealism.
  Civitai: https://civitai.com/models/133005/juggernaut-xl

- **Pony Realism – v2.2**
  Combines Pony flexibility with ultra-realistic results.
  Civitai: https://civitai.com/models/372465/pony-realism

- **EpicJuggernautXL**
  Hybrid of Juggernaut + EpicRealism for maximum versatility.
  Civitai: https://civitai.com/models/863328/epicjuggernautxl

### Furry / Anthro

Specialized for anthropomorphic animals, detailed fur, scales, and yiff styles.

- **Nova Furry XL – IL v16.0**
  Best-in-class for fur detail, feathers, and expressive anthro characters.
  Civitai: https://civitai.com/models/503815/nova-furry-pony

- **FurationXL** (CherryCream)
  Strong for both cute and adult furry/anthro scenes.
  Civitai: https://civitai.com/models/601594/furationxl

### 3D / CGI / Render Style

For plastic-like figures, game assets, Blender-style renders, or 3D model looks. These checkpoints generate images that mimic 3D renders (great base for post-processing or image-to-3D tools).

- **Nova 3DCG XL – IL v9.0**
  Creates beautiful 3D/CG/PVC-figure aesthetics that pair perfectly with your pose tools.
  Civitai: https://civitai.com/models/715287/nova-3dcg-xl

- **3D Rendering Style LoRAs** (e.g., 3DMM series) — often stacked on top of bases like Juggernaut or Pony for enhanced CGI look.
  Civitai search: https://civitai.com/models?query=3d+rendering+style

### Dedicated 3D Generation Models (Image/Text-to-3D in ComfyUI)

These go beyond 2D checkpoints — they're specialized for generating actual 3D meshes/textures from images or text. Many integrate via **custom nodes** (install via ComfyUI Manager: search "3D-Pack", "TripoSR", etc.) and work amazingly after generating a base image in ComfyUI.

- **Hunyuan3D 2.1 / 2.0** (Tencent) — One of the top open-source 3D models in 2026. Excellent high-res textured meshes, strong geometry accuracy, and good for multiview/image-to-3D. Often praised for outperforming others in detail and editability (e.g., layer segmentation).
  Hugging Face (main repo & demo): https://huggingface.co/tencent/Hunyuan3D-2.1
  GitHub: https://github.com/Tencent-Hunyuan/Hunyuan3D-2
  ComfyUI integration: Via ComfyUI-3D-Pack custom nodes (install from Manager) or dedicated workflows on Civitai.

- **Tripo (v3.0 / TripoSR / Tripo 3D)** — Fast, high-fidelity image-to-3D reconstruction. Native ComfyUI support in late 2025+ (Standard or Detailed/Ultra modes for cleaner meshes up to millions of faces). Great for quick asset creation from your ComfyUI gens.
  Official: https://www.tripo3d.ai (check for ComfyUI nodes)
  Hugging Face (related models): Search "TripoSR" or "Tripo" on HF.
  ComfyUI nodes: ComfyUI-Flowty-TripoSR (older) or native Tripo v3.0 support in recent ComfyUI updates.

- **Other Strong 3D Options** (via ComfyUI-3D-Pack or similar):
  - **Rodin** / **Trellis** / **PartCrafter** — Popular for textured assets and part separation (good for editable 3D). Often compared head-to-head with Hunyuan/Tripo.
  - Install **ComfyUI-3D-Pack** (GitHub: https://github.com/MrForExample/ComfyUI-3D-Pack) — massive suite for 3DGS, NeRF, mesh processing, and these models.
    Search Civitai for workflows: e.g., "Hunyuan 3D 2.1 High-Quality Texture Workflow".

## Quick Start in ComfyUI

1. Download your chosen checkpoint (or install 3D custom nodes).
2. Place checkpoints in `ComfyUI\models\checkpoints\`.
3. For 3D: Install nodes via Manager → Load image from 2D gen → feed to 3D node (e.g., Hunyuan or Tripo) → output .obj/.glb mesh.
4. Pair with a VAE (built-in for most SDXL) and start prompting!

**Pro Tip from DreamSprite**: Start with **Nova Anime XL** (anime) or **Juggernaut XL** (realistic) for 2D bases, then pipe strong outputs into **Hunyuan3D** or **Tripo v3.0** for true 3D exports. Perfect for turning your 2D generations into rotatable 3D models!
