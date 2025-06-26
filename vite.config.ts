import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore TypeScript warnings during build
        if (warning.code === 'TYPESCRIPT_ERROR') return
        warn(warning)
      }
    }
  },
  esbuild: {
    // Ignore TypeScript errors during build
    ignoreAnnotations: true,
  }
})
