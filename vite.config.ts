import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // permet d'écouter sur toutes les interfaces réseau
    port: 3000,        // vous pouvez définir le port de votre choix
  },
})
