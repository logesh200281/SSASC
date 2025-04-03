import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SSASC/' // <-- Add this line (Match with your GitHub repo name)
});
