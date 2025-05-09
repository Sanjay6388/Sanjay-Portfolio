import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.', // Root is the project root (where index.html resides)
  build: {
    outDir: 'dist', // Output directory for the build
  },
});