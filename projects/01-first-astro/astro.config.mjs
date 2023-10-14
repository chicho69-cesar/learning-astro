import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    preact(),
  ], // Agregamos integraciones
  output: 'hybrid' // Activamos server side rendering, options: [ 'server' | 'hybrid' | 'client']
})
