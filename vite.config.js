import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/ollama': {
        target: 'http://localhost:11434',
        rewrite: path => path.replace(/^\/ollama/, ''),
        changeOrigin: true,
      }
    }
  }
})
