// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// site + base make the site work at https://anaszok12.github.io/blog/
export default defineConfig({
  site: 'https://anaszok12.github.io',
  base: '/blog',
  vite: {
    plugins: [tailwindcss()],
  },
});
