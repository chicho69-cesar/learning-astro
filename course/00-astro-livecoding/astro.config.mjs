import { defineConfig } from 'astro/config';
/* Definimos las importaciones de las integraciones para astro */
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Definimos las integraciones que vamos a utilizar
  integrations: [
    tailwind(),
    react()
  ],
  /* Definimos el modo de salida, en este caso híbrido, es decir, que podemos 
  tener contenido estático y contenido generado del lado del servidor */
  output: 'hybrid',
  // Configuración de la integración de node
  adapter: node({
    mode: 'standalone'
  })
});
