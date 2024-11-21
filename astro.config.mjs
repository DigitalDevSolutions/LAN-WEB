// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-article.netlify.app/',
    integrations: [
        tailwind(),
        partytown({
            config: {
              forward: ["dataLayer.push"],
            },
        }),
    ],
});