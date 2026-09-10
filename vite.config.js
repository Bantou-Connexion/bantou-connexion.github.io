import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Le dépôt est un site GitHub Pages « user/org » (bantou-connexion.github.io),
// servi à la racine du domaine : la base reste donc « / ».
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    target: 'es2020',
    cssCodeSplit: false,
    // Une seule page, peu de dépendances : on garde un bundle unique et compact.
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
