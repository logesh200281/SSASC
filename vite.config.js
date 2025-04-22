import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SSASC/', // Match this with your GitHub repo name if deploying via GitHub Pages
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
