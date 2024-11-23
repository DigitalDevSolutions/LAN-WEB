// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: "https://digitaldevsolutions.cl",
  integrations: [
        sitemap(),
        tailwind(),
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
    ],
});