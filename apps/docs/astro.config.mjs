import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Arc Carousel',
      social: {
        github: 'https://github.com/MBrunoS/arc-carousel',
      },
      sidebar: [
        {
          label: 'Quick Start',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Getting Started', link: '/quick-start/getting-started/' },
            { label: 'Key Concepts', link: '/quick-start/key-concepts/' },
          ],
        },
        {
          label: 'API Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      customCss: ['./src/styles/theme.css'],
    }),
  ],
})
