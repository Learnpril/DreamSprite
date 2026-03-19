---
title: LoRAs
description: Lightweight add-ons for characters, styles, poses - loading, strength tuning, stacking.
---

LoRAs (Low-Rank Adaptation) are one of the most popular and versatile tools in the AI art world. They let you add or modify specific styles, characters, outfits, poses, lighting, or concepts to a base checkpoint model without retraining the entire thing from scratch.

A LoRA is a small file (usually 10-200 MB) that contains "delta" changes - small adjustments to the model's weights. When you apply it, these changes layer on top of the base checkpoint, giving you targeted control. They're fast to train, cheap on VRAM, and extremely effective for personalization.

## How LoRAs Differ from Other Tools

- **Vs Checkpoints**: Checkpoints are the full model (gigabytes). LoRAs are tiny add-ons that modify an existing checkpoint. You can't use a LoRA alone - it needs a base model.
- **Vs Embeddings**: Embeddings tweak only the CLIP text encoder (how prompts are interpreted). LoRAs modify the U-Net (image generation layers) for deeper changes like anatomy, structure, lighting, or character consistency.
- **Training**: LoRAs train on 10-100 images with captions; takes minutes to hours on a decent GPU. Embeddings are even lighter but less structural.
- **Strength**: LoRAs can dramatically shift style or character (e.g., make anyone look like a specific OC), while embeddings are subtler.

In short: Use LoRAs when you want strong, visible changes; use embeddings for fine-tuning interpretation.

## How to Use LoRAs in ComfyUI

1. **Download**
   - Civitai: https://civitai.com/models?types=LORA - filter by "LoRA", sort by "Most Downloaded" or "Highest Rated". Read examples and reviews.
   - Hugging Face for some official/experimental ones, but Civitai dominates.

2. **Place the file**
   - Drop the .safetensors file (preferred) into:
     `ComfyUI\models\loras\`
     (Create the folder if needed - ComfyUI scans automatically.)

3. **Load and Apply in Workflow**
   - Add a **Load LoRA** node (or use the built-in LoRA Loader).
   - Connect it between the base **Load Checkpoint** and the rest of your workflow.
   - Key parameters:
     - **model_strength** (0.0-1.0 or higher): How strongly the LoRA affects the image generation. Start at 0.6-0.8.
     - **clip_strength** (0.0-1.0): How strongly it affects prompt understanding (CLIP side). Often same as model strength, or lower (0.4-0.8) for subtlety.
   - Trigger in prompt: Many LoRAs require a keyword (e.g., "character_name" or "style_tag") - check the Civitai page. Some work without any trigger (auto-applied).

4. **Trigger Example**
   If a LoRA is called "my_favorite_character_v2.safetensors" and needs the trigger "my_character", your prompt might include:
   "my_character in a kimono, dynamic pose, masterpiece"
   Then set strength 0.7-0.9 in the LoRA node.

## Popular LoRAs in 2026

These are trending on Civitai (high downloads, strong community use):

- **Character LoRAs**
  Specific people/OCs (e.g., anime characters, celebrities, custom faces). Look for "face" or "character" in title. Use strength 0.6-1.0.

- **Style LoRAs**
  - Anime styles (Pony XL merges, detailed anime, sketch/anime lineart).
  - Realistic enhancers (better skin, lighting, cinematic).
  - Artistic (watercolor, oil painting, pixel art, dark academia).

- **Concept/Outfit LoRAs**
  - Clothing (kimono, armor, casual wear).
  - Poses (hug, dynamic action, sitting).
  - Lighting/mood (volumetric fog, neon glow, soft pastel).

- **Fix/Utility LoRAs**
  - Better hands, anatomy fixes, detail enhancers.
  - Add detail / Add more details (boosts sharpness and complexity).

- **Pony XL Specific**
  Many LoRAs are Pony-tuned (score_9 compatible). Great for anime/furry.

## Quick Tips for Using LoRAs Effectively

- **Start low**: 0.6-0.8 strength. Too high (1.2+) can distort anatomy or overpower the base model.
- **Clip vs Model strength**: Lower clip strength if the LoRA changes style too aggressively; higher if it's character-focused.
- **Stacking**: Use 1-3 LoRAs max (more = risk of artifacts). Combine: one for character, one for style, one for detail.
- **Trigger words**: Always check the Civitai page - some need "trigger" in prompt, others are triggerless.
- **Negative prompt**: Use strong negatives (e.g., EasyNegative embedding) to counter LoRA side effects.
- **Save workflows**: When you find a good combo, save the JSON workflow in ComfyUI - include LoRA strengths and triggers.

LoRAs are incredibly powerful for personalization - they're the go-to for consistent characters or unique styles without full model swaps.
