import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages: https://solutions-jpg.github.io/FinZolve-Frontend/
  base: '/FinZolve-Frontend/',
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
