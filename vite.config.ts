import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/vity-ui-demo',
  plugins: [vue()],
  server: {
    // ← ← ← ← ← ←
    host: '0.0.0.0' // ← 新增内容 ←
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
