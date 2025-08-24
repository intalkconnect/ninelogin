import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 3300,
    allowedHosts: [
      'portal.dkdevs.com.br',   // libera esse domínio
      'srv-auth.dkdevs.com.br'  // adicione outros se precisar
    ]
  }
})
