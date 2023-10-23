import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default ({mode}:{mode:string} )=> {
  console.log(loadEnv(mode, process.cwd()),mode);
  
  return defineConfig({
    base:loadEnv(mode, process.cwd()).BASE_URL,
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
}
