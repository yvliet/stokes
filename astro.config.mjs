import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      proxy: {
        '^/studio/(?!assets/canvaskit\\.wasm)': {
          target: 'http://localhost:1420',
          changeOrigin: true,
          ws: true,
        },
      },
    },
  },
});
