// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// permitir subdomínios .dkdevs.com.br no dev/preview
const allowed = ['.dkdevs.com.br']

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,            // escutar em 0.0.0.0 no Docker
    allowedHosts: allowed, // libera acesso por domínio
  },
  preview: {
    host: true,
    port: 3300,            // bate com o compose
    strictPort: true,
    allowedHosts: allowed,
  },
})
