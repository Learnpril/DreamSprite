---
title: Prompting
description: Write prompts that actually work - weights, styles, negatives, reverse-engineering tips.
---

Prompting is where the real creativity kicks in - and yes, **there's definitely an art to it**. It's not just typing words; it's learning how different models "think" and speaking their language so you get exactly what you want instead of random surprises.

The good news? It gets way easier with practice. You'll start with basic prompts that kinda work, then tweak and experiment until you have reusable templates that nail your style every time. It takes time (weeks or months for most people), but that's part of the fun - every "meh" generation teaches you something new. The key mindset: treat prompting like sketching. Iterate fast, save what works, and don't get frustrated when the first 10 tries aren't perfect.

In ComfyUI (with SDXL/Pony/Flux bases), prompting is **natural language + structure** - describe scenes like you're talking to a photographer or director. Unlike older SD 1.5 models that loved short keyword lists, modern checkpoints understand full sentences much better.

## Positive and Negative Prompts

Every generation in ComfyUI uses two parts:

- **Positive Prompt**: What you _want_ - the main description of the scene, character, style, lighting, etc. This is where you pour in all the details.
- **Negative Prompt**: What you _don't_ want - things to avoid (blurry, deformed, extra limbs, low quality, artifacts). A strong negative prompt often makes a bigger difference than adding more to the positive one.

**Example pair**:

- Positive: "cute anime girl with purple hair and headphones hugging a raven-haired boy, soft cherry blossom background, vibrant colors, masterpiece"
- Negative: "blurry, low quality, deformed, extra limbs, bad anatomy, ugly, poorly drawn hands, text, watermark"

Always test and refine both!

## Anime Prompting

Anime-style models (Nova Anime XL, Pony variants, Illustrious merges) respond best to **vibrant, stylized descriptions** mixed with quality boosters and artist references.

- Focus on: character details, hair flow, clothing folds, expressive eyes, dynamic lighting, anime aesthetics.
- Common boosters: masterpiece, best quality, highly detailed, sharp lines, vibrant colors, intricate details.
- Artist tags: in the style of Makoto Shinkai, Studio Ghibli, Kyoto Animation, etc.
- Example positive prompt:
  "cute anime girl with purple hair and headphones, wearing a kimono, soft cherry blossom background, dynamic pose hugging a raven-haired boy, expressive eyes, vibrant colors, intricate details, masterpiece, best quality, anime style, in the style of Makoto Shinkai"

## Realistic / Photorealistic Prompting

Realistic models (Juggernaut XL, EpicRealism, Pony Realism) want **photography and cinematic language**.

- Focus on: lighting, camera settings, skin texture, depth of field, materials, mood.
- Use terms like: 85mm lens, soft studio lighting, volumetric god rays, sharp focus, detailed skin pores, cinematic composition.
- Quality: ultra realistic, photorealistic, 8k, HDR, professional photography.
- Example:
  "photorealistic portrait of a young woman with freckles hugging her partner in a cozy kitchen, soft natural window light, 50mm lens, shallow depth of field, detailed skin texture, warm tones, cinematic realism, highly detailed, 8k"

## Artistic Prompting

Artistic styles (painting, sketch, digital art, mixed media) lean on **medium, artist references, and mood**.

- Focus on: brush strokes, texture, color palette, art movement (impressionism, cyberpunk, dark academia).
- Heavy artist names or styles
- Example:
  "ethereal digital painting of two characters sharing food under lantern light, dark academia aesthetic, intricate hatching lines, soft lavender and gold tones, in the style of Van Gogh, masterpiece, highly detailed"

## Prompt Styles: Booru, BLIP, and Natural Language

Different models were trained on different "languages," so the style of your prompt matters a lot:

- **Booru Style** (comma-separated tags, like Danbooru): Short keywords, no full sentences.
  Example: "1girl, purple hair, headphones, kimono, cherry blossoms, hugging, masterpiece"
  Best for: Anime/Pony models (many were trained on booru-tagged datasets). Fast and precise for character details.

- **BLIP / Natural Language** (full sentences): Descriptive, flowing English.
  Example: "A cute anime girl with flowing purple hair and headphones is gently hugging a raven-haired boy under cherry blossoms."
  Best for: Realistic/SDXL models - they understand context, actions, and relationships much better this way.

- **Hybrid / Other Styles**: Mix of both, or model-specific (e.g., Pony often likes "score_9, score_8_up" at the start for quality). Many people start with natural language then add key booru tags for extra control.

Experiment - most modern checkpoints handle both, but matching the training style gives sharper results.

## How Prompting Differs in Midjourney

Midjourney (cloud) is more forgiving and conversational - it understands natural English beautifully and handles creative interpretation well.

- Shorter, descriptive sentences work great.
- Built-in parameters do a lot of the heavy lifting: `--ar 16:9`, (aspect ratio)`--v 8`,(version) `--stylize 250` (more artistic), `--q 2` (quality).
- Less need for negative prompts or weights - Midjourney "guesses" better.
- Difference vs ComfyUI: Midjourney is faster for ideation but less precise for exact control. In ComfyUI you add ControlNet/LoRAs/weights for pixel-perfect results; Midjourney feels more "magical."

## Text-to-3D Prompting (Hunyuan3D, Tripo, etc.)

For dedicated 3D models, keep it **simple, geometric, and material-focused** - these tools care more about structure than artistic flair.

**Quick note**: Pure text-to-3D still isn't as reliable as we'd like in 2026 - results can be inconsistent in geometry or details. **Image-to-3D almost always works out much better** (just generate a strong 2D image in ComfyUI first, then feed it to Tripo or Hunyuan for cleaner meshes and textures).

That said, here are solid text-to-3D tips when you need them:

- Focus on: shape, materials, angles, scale. Avoid complex storytelling.
- Good structure: "detailed 3D model of [subject], [material], [style], high resolution PBR textures, clean topology"
- Example for Hunyuan3D/Tripo:
  "cute anime-style character with purple hair and headphones, wearing flowing kimono, expressive pose, high-detail PBR textures, clean mesh, low poly friendly for games"
- Be explicit about "single object", "no background", "textured surface".

## Quick Tips to Get Better Fast

- **Order matters**: Put the most important stuff first (subject -> action -> details -> style).
- **Weights**: Use `(key detail:1.2)` to emphasize or `(key detail:0.8)` to reduce. Super powerful in ComfyUI.
- **CFG Scale**: Higher (7-12) makes the model follow your prompt more strictly; lower (4-6) gives more creativity.
- Start simple, then layer details.
- Always test negative prompts - they prevent common mess-ups.
- Save your best prompts in Obsidian with the model used.
- Use JoyCaption or Florence-2 nodes in ComfyUI to auto-generate detailed prompts from reference images - huge time-saver!

Prompting takes practice, but once it clicks, you'll generate exactly what's in your head.

## Resources to Level Up Your Prompting

- **Free AI helpers** (super useful!):
  - ChatGPT / Claude / Grok / Gemini: Ask "Write a detailed SDXL prompt for [your idea] in anime style, optimized for ComfyUI, with positive and negative versions."
- **Community sites**: Civitai (example prompts under every model), PromptHero, Lexica.art.
- **Tools**: JoyCaption (ComfyUI node), PromptPerfect, AIPRM Chrome extension.

Next in Components: Embeddings and LoRAs - these are often triggered right in the prompt itself with special keywords (like `<lora:yourcharacter:1.0>` or embedding names), so the prompting skills you're building here will pay off even more!
