import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  // На поддомене сайт раздаётся из корня → base '/'.
  // Для GitHub Pages можно собрать с BASE_PATH=/toiiiiishakk/.
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  server: {
    // Превью-инструмент передаёт назначенный порт через PORT.
    port: process.env.PORT ? Number(process.env.PORT) : 5173,
  },
}))
