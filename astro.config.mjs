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
      ],
      sidebar: [],
    }),
  ],
});
