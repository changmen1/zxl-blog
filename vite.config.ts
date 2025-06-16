import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path"


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // 必须代理wakatime  后期部署需要转移到后端进行代理
    proxy: {
      '/wakatime': {
        target: 'https://wakatime.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wakatime/, ''),
        headers: {
          Authorization: `Basic ${btoa('waka_cfdc8595-f715-40cb-897c-4fe0405de740:')}`,
        },
      },
    },
  }
})
