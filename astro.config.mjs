import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "DreamSprite",
      logo: {
        src: "./src/assets/logo.png",
        alt: "DreamSprite Logo",
      },
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "script",
          content:
            "document.documentElement.dataset.theme = 'dark'; localStorage.setItem('starlight-theme', 'dark');",
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: true,
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap",
          },
        },
        {
          tag: "script",
          content:
            "document.addEventListener('DOMContentLoaded', function() { var f = document.createElement('div'); f.className = 'ds-site-footer'; f.textContent = \"By the time I've uploaded this information, it's already outdated. Do your own research!\"; document.body.appendChild(f); });",
        },
        {
          tag: "script",
          content:
            "document.addEventListener('DOMContentLoaded', function() { var nav = document.querySelector('.pagination-links'); if (nav && window.location.pathname !== '/dashboard/' && window.location.pathname !== '/') { var btn = document.createElement('a'); btn.href = '/dashboard/'; btn.className = 'ds-back-to-dashboard'; btn.textContent = '← Back to Dashboard'; var prev = nav.querySelector('a[rel=\"prev\"]'); if (prev) { prev.after(btn); } else { nav.prepend(btn); } } });",
        },
      ],
      sidebar: [
        { label: "Dashboard", slug: "dashboard" },
        {
          label: "Getting Started",
          items: [
            { label: "Starting Guide", slug: "guides/starting-guide" },
            { label: "Midjourney Setup", slug: "guides/midjourney-setup" },
            { label: "ComfyUI Setup", slug: "guides/comfyui-setup" },
          ],
        },
        {
          label: "AI Pipeline Components",
          items: [
            { label: "Models", slug: "guides/models" },
            { label: "Prompting", slug: "guides/prompting" },
            { label: "Embeddings", slug: "guides/embeddings" },
            { label: "LoRAs", slug: "guides/loras" },
            { label: "VAE", slug: "guides/vae" },
            { label: "ControlNet", slug: "guides/controlnet" },
          ],
        },
        {
          label: "2D Asset Generation",
          items: [
            { label: "Midjourney 2D", slug: "guides/midjourney-2d" },
            { label: "ComfyUI 2D Guide", slug: "guides/comfyui-2d" },
          ],
        },
        {
          label: "3D Asset Generation",
          items: [
            { label: "Blender Setup", slug: "guides/blender-setup" },
            { label: "ComfyUI 3D", slug: "guides/comfyui-3d" },
          ],
        },
        {
          label: "Extras",
          items: [
            { label: "Luddite Guide", slug: "guides/luddite-guide" },
            { label: "Notetaking", slug: "guides/notetaking" },
            { label: "Common Nodes", slug: "guides/common-nodes" },
          ],
        },
      ],
    }),
  ],
});
