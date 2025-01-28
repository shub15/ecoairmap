import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import cesium from 'vite-plugin-cesium'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),cesium()],
})
