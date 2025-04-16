import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      // 2. Add the alias configuration
      '@': path.resolve(__dirname, './src'), // Map '@' to the 'src' directory
    },
  },
})
