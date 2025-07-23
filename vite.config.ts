import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080, // Change this to another port if you want
  },
  plugins: [react(), tailwindcss()]
})
