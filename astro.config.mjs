import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://luis9cabrera.github.io',
  base: '/landing-page-men-maq/',
  vite: {
    plugins: [tailwind()]
  }
});