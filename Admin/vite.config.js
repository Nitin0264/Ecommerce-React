import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    // Forces Vite to close cleanly instead of hanging in CI/CD environments
    minify: true,
    emptyOutDir: true,
  },
  // Ensures the node process terminates immediately after bundling completes
  closeBundle() {
    setTimeout(() => process.exit(0), 0)
  }
})