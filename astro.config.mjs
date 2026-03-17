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
      ],
      sidebar: [
        { label: "Getting Started", slug: "getting-started" },
        {
          label: "Guides",
          items: [{ label: "Creating Assets", slug: "guides/creating-assets" }],
        },
      ],
    }),
  ],
});
