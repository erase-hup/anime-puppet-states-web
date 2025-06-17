import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // GitHub Pages için base path - repository adınıza göre güncelleyin
  base: process.env.NODE_ENV === 'production' ? '/' : '/', // User/org site için
  // VEYA
  // base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/', // Project site için
  build: {
    outDir: 'dist',
    assetsDir: 'assets' // 'asset' yerine 'assets' önerilir
  }
}));
