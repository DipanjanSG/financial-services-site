import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
 base: '/global-financial-services',
 server: {
    host: '0.0.0.0',   // 👈 IMPORTANT
    port: 5175,
    strictPort: true,
    

    allowedHosts: ['www.mahasamvit.com', 'mahasamvit.com'],


    hmr: {
      clientPort: 443
    },
  }
})

