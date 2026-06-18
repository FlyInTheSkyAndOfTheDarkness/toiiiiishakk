import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // GitHub Pages раздаёт сайт из /<repo>/ — base нужен только при сборке.
  base: command === 'build' ? '/toiiiiishakk/' : '/',
  plugins: [react()],
  server: {
    // Превью-инструмент передаёт назначенный порт через PORT.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
}))
