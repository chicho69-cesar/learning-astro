import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// import node from "@astrojs/node";
import vue from '@astrojs/vue';


import node from '@astrojs/node';


// https://astro.build/config
export default defineConfig( {
  site: 'https://example.com',
  integrations: [ mdx(), sitemap(), vue() ],

  // adapter: cloudflare()
  output: 'static',

  adapter: node( {
    mode: 'standalone',
  } ),

  server: {
    port: import.meta.env.PORT || 3000,
  }
} );