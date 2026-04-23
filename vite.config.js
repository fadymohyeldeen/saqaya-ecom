import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      // receives /api requests and forwards them to dummyjson to prevent CORS errors
      '/api': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''), // replaces /api with nothing
      },
    },
  },
})
