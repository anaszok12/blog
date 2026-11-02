// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// site + base make the site work at https://anaszok12.github.io/blog/
export default defineConfig({
  site: 'https://anaszok12.github.io',
  base: '/blog',
  // sitemap: builds sitemap-index.xml listing every page, for Google Search Console
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
