import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  base: '/luna-videomaker/',
  server: {
    hmr: mode === 'development',
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/vue') && !id.includes('vue-chartjs')) {
            return 'vendor-vue'
          }
          if (id.includes('node_modules/firebase')) {
            return 'vendor-firebase'
          }
        },
      },
    },
  },
}))
