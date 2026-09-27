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
    // Peu de dépendances : on garde un bundle unique et compact.
    rollupOptions: {
      // Chaque page HTML autonome doit être déclarée ici pour être publiée dans dist/.
      input: {
        main: 'index.html',
        diagnostic: 'diagnostic.html',
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
});
