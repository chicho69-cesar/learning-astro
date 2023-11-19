import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'
import preact from '@astrojs/preact'
import react from '@astrojs/react'
import svelte from '@astrojs/svelte'
import vue from '@astrojs/vue'
import solid from '@astrojs/solid-js'

export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    preact({ include: ['**/preact/*'] }),
		solid({ include: ['**/solid/*'] }),
		react({ include: ['**/react/*'] }),
		svelte(),
		vue(),
  ]
})
