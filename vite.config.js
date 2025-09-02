import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// Edit the base if deploying to a project page, e.g. '/orbitflow/'
// For user/organization pages, leave base as '/'
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue()],
    base: env.VITE_BASE || '/',
  }
})
