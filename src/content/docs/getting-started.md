---
title: Getting Started with ComfyUI
description: Learn how to download and install ComfyUI for AI image generation.
---

ComfyUI is a powerful, node-based interface for running Stable Diffusion models (and more). It's modular, fast, and great for complex workflows like the pose + ControlNet setups we'll cover later on DreamSprite.

This guide covers installation as of March 2026 (ComfyUI v0.17.x). The easiest way for most users (especially Windows with NVIDIA GPUs) is the **Portable version** — no Python setup required.

## Option 1: Quick & Recommended — Windows Portable (NVIDIA GPU)

1. **Download the latest portable build**

   Go to the [official releases page](https://github.com/Comfy-Org/ComfyUI/releases/latest).
   Download: `ComfyUI_windows_portable_nvidia.7z`
   (Direct link usually: https://github.com/Comfy-Org/ComfyUI/releases/latest/download/ComfyUI_windows_portable_nvidia.7z)
   - For older NVIDIA GPUs (10-series or below): Use the CUDA 12.6 variant instead (`ComfyUI_windows_portable_nvidia_cu126.7z`).

2. **Extract the archive**

   Use 7-Zip (free) or Windows built-in extractor.
   Right-click the .7z file → Extract to a folder like `C:\ComfyUI` or `D:\AI\ComfyUI`.
   - Tip: If Windows blocks it, right-click the .7z → Properties → General tab → check "Unblock" if present.

3. **Update your NVIDIA drivers** (important for CUDA)

   Download the latest from [NVIDIA's site](https://www.nvidia.com/Download/index.aspx). Game Ready or Studio drivers both work.

4. **Place your models**

   Put checkpoint files (.safetensors or .ckpt) in:
   `ComfyUI\models\checkpoints\`
   VAEs → `ComfyUI\models\vae\`
   ControlNet models → `ComfyUI\models\controlnet\`
   (Create subfolders if needed — ComfyUI scans them automatically.)

5. **Launch ComfyUI**

   Double-click `run_nvidia_gpu.bat` (or `run_cpu.bat` if testing without GPU).
   - It opens a local server — wait for "Starting server" then open the URL in your browser (usually http://127.0.0.1:8188).
   - First run may take a minute to set up.

**Pros**: Zero Python hassle, includes Python 3.13 + latest PyTorch CUDA.
**Cons**: Slightly larger download (~10-15 GB extracted).

## Option 2: Manual Installation (For Customization or Other OS)

Use this if you want git updates, shared models with other UIs, or you're on Linux/macOS.

### Prerequisites

- Git: Download from https://git-scm.com/downloads
- Python 3.12–3.13 (3.13 recommended): https://www.python.org/downloads/
  Add to PATH during install.

### Steps

1. **Clone the repository**

   Open Command Prompt / PowerShell / Terminal:

   ```bash
   git clone https://github.com/comfyanonymous/ComfyUI.git
   cd ComfyUI
   ```

2. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

   For NVIDIA GPU support, also install PyTorch with CUDA:

   ```bash
   pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124
   ```

3. **Place your models**

   Same as the portable version — put checkpoints, VAEs, and ControlNet models in the appropriate `models/` subfolders.

4. **Run ComfyUI**

   ```bash
   python main.py
   ```

   Then open http://127.0.0.1:8188 in your browser.

## Next Steps

Now that ComfyUI is up and running, head over to the [Creating Assets](/guides/creating-assets/) guide to learn how to build your first game asset with DreamSprite workflows.
