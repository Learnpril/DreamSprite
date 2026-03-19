---
title: ComfyUI Setup
description: Portable install (easiest), manual option, first test workflow, Manager setup, local vs cloud comparison, and tips for smooth sailing.
---

Midjourney is awesome for quick cloud ideation, but when you want full control, zero queues, no monthly fees, and complex workflows (like locking poses with DWPose + OpenPoseXL2), **ComfyUI** is where the real magic happens. It's fully node-based, runs completely local on your GPU (or in the cloud), and scales beautifully whether you're on a high-end card or renting power remotely.

As of March 2026 (v0.17.2), the **portable Windows NVIDIA build** is still the fastest, most beginner-friendly path - no system Python conflicts, everything bundled.

## Local vs Cloud: What's the Difference?

You can run ComfyUI **locally** (on your own PC) or **in the cloud** (renting remote GPUs via services). Here's a quick breakdown:

| Aspect             | Local (Your PC)                                        | Cloud (Rented GPU)                                                     |
| ------------------ | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| **Cost**           | One-time (hardware) + electricity; $0 ongoing for gens | Pay-per-hour/use (e.g., $0.35-$2+/hr); no upfront hardware             |
| **Performance**    | Depends on your GPU; consistent speed once set up      | Access to faster/newer GPUs (RTX 5090, H100, etc.); often 2-5x quicker |
| **Setup**          | 5-30 min install; full control                         | 2-10 min (some one-click); but manage instance/shutdown                |
| **Privacy**        | 100% offline; data never leaves your machine           | Images/prompts sent to provider; choose privacy-focused ones           |
| **Unlimited Gens** | Yes, as long as PC is on                               | Yes, but pay for runtime; stop when idle                               |
| **Power/Heat**     | Your PC fans roar, higher electric bill                | No local heat/power draw                                               |
| **Best For**       | Frequent use, privacy, complex custom nodes, offline   | No strong GPU, testing, bursts of high-res/Flux/video, portability     |
| **Downsides**      | Upfront cost, VRAM limits, maintenance                 | Internet required, potential queues, recurring cost                    |

**Quick rule of thumb**: If you generate a lot (daily/weekly) and have a decent GPU - go local (cheaper long-term). If your PC is weak/old/no GPU, or you want occasional high-power bursts - cloud is perfect (start cheap, scale up).

## Running ComfyUI in the Cloud (If No Powerful PC)

No high-end GPU? No problem - rent one hourly (often cheaper than buying). Popular 2026 options for ComfyUI:

- **RunComfy** (easiest/no-setup): https://www.runcomfy.com - Native ComfyUI in browser, fast GPUs (16-141GB VRAM), one-click workflows, API scaling. Great for beginners; pay-per-use or subscription. Zero install - just sign up and launch.
- **RunPod** (flexible/value king): https://www.runpod.io - One-click ComfyUI templates (RTX 4090/A100/H100), $0.35-$1+/hr depending on GPU. Spin up a "Pod", access via browser or SSH, shut down when done. Community templates make it fast.
- **Vast.ai** (cheapest spot pricing): https://cloud.vast.ai - Peer-to-peer rentals (RTX 3090/4090 often $0.30-$0.60/hr). Search for "ComfyUI" Docker images, deploy, connect via browser/SSH. More manual but lowest cost.
- **ThinkDiffusion** or **RunDiffusion**: https://www.thinkdiffusion.com / https://rundiffusion.com - Managed ComfyUI interfaces, preloaded models/nodes, pay-per-hour or credits. Good for zero-config.
- **Other solid picks**: Lightning AI (free tier possible for light use), Spheron, Hyperstack (H100/A100), or Lambda Labs.

**How to start (general steps for most)**:

1. Sign up on the platform (credit card usually required).
2. Choose a ComfyUI template/one-click deploy (or upload your workflow JSON).
3. Select GPU (start with RTX 4090/A40 for balance of speed/cost).
4. Launch instance - wait 2-5 min.
5. Access via web UI (browser link provided) - same as local!
6. Generate - download images - shut down instance to stop billing.

Tip: Use spot/interruptible instances for big savings (cheaper but can pause). Always shut down when idle - costs add up fast!

No need to install anything else first (like Automatic1111 or Stable Diffusion webui) - ComfyUI is completely standalone.

_(We'll explain what models are, how to choose them, and our favorites in the next section: [Models](/guides/models/) - jump there when you're ready!)_

## Step 1: Portable NVIDIA Install (Recommended for Local)

---

# Local Installation (Run ComfyUI on Your Own PC)

_Everything below is for installing and running ComfyUI directly on your machine. Skip this if you're using a cloud provider above._

---

## Option 1: Portable NVIDIA Install (Recommended)

1. **Download the Latest Portable**
   Head to: https://github.com/Comfy-Org/ComfyUI/releases/latest
   Download: `ComfyUI_windows_portable_nvidia_cu130.7z`
   (If you have an older card, grab the cu128 or cu126 variant instead.)
   Extracted size is ~10-15 GB - put it on a fast SSD if you can.

2. **Extract the Archive**
   Use 7-Zip (free) or Windows built-in extractor.
   Extract to a folder like `D:\AI\ComfyUI` or `C:\ComfyUI`.
   Tip: If Windows blocks the file, right-click -> Properties -> General -> Unblock.

3. **Update NVIDIA Drivers**
   Grab the latest Studio or Game Ready drivers from https://www.nvidia.com/Download/index.aspx. Restart your PC after installing.

4. **Place Your Models (Do This Before Launching)**
   Put checkpoint files (.safetensors or .ckpt) in:
   `ComfyUI\models\checkpoints\`
   VAEs -> `models\vae\`
   ControlNet models -> `models\controlnet\`
   (Subfolders are fine - ComfyUI scans them automatically.)
   Good starters: Nova Anime XL or Juggernaut XL - download from Civitai or Hugging Face.

5. **Launch ComfyUI**
   Double-click `run_nvidia_gpu.bat` (or the cu128/cu126 version if you chose that).
   First run takes ~1-2 minutes (it sets up deps).
   Your browser should open http://127.0.0.1:8188 automatically.
   You'll see "Starting server..." in the terminal - totally normal.

## Option 2: Manual Install (Git Updates or Customization)

1. **Prerequisites**
   - Git: https://git-scm.com/downloads
   - Python 3.13: https://www.python.org/downloads/ (check "Add to PATH" during install)

2. **Clone the Repo**
   Open Command Prompt/PowerShell:

   ```bash
   git clone https://github.com/Comfy-Org/ComfyUI.git
   cd ComfyUI
   ```

3. **Virtual Environment & PyTorch**

   ```bash
   python -m venv venv
   venv\Scripts\activate
   pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu130
   ```

4. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

5. **Launch**
   ```bash
   python main.py
   ```
   (Add `--listen` for network access, `--lowvram` if needed.)

Portable is way easier for most people - updates are just re-downloading and extracting.

---

# After Installation (Cloud or Local)

_These steps apply whether you installed locally or are using a cloud instance._

---

## Install ComfyUI-Manager (Do This Right Away)

Manager is essential - it lets you install/update custom nodes (DWPose, ControlNet Aux, JoyCaption, etc.) with one click.

- In portable: Look for `Install-manager-for-portable-version.bat` in the folder (run it).
- Or manually: Download from https://github.com/ltdrdata/ComfyUI-Manager, drop into `custom_nodes/`, restart ComfyUI.
- Once running: You'll see a **Manager** button top-right (or enable with `--enable-manager` in the .bat file).
- Click "Install Missing Custom Nodes" if prompted on first workflows.

## First Test Workflow

1. Load the default workflow (or drag a simple one from Civitai).
2. **Load Checkpoint** -> pick your model.
3. **CLIP Text Encode** -> add positive/negative prompts.
4. **KSampler** -> 20-30 steps, CFG 7-8.
5. **VAE Decode** -> **Preview Image** or **Save Image**.
6. Hit **Queue Prompt** - your first local generation!

## Common Gotchas & Tips

- Slow first load? Normal - it scans models.
- OOM errors? Try `--lowvram` or `--disable-smart-memory` flags.
- Updates: Re-download portable (overwrite files, keep your models folder) or `git pull` + `pip install -r requirements.txt --upgrade` in manual.

You're now set up for unlimited, private, fully customizable generations.
