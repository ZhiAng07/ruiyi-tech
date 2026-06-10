import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages 部署时设置 base 为仓库名，例如 '/enterprise-site/'
// 本地开发时默认为 '/'
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.BASE_URL ?? '/',
})
