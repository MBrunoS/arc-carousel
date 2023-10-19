import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

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
            { label: 'Getting Started', link: '/quick-start/getting-started/' },
            { label: 'Key Concepts', link: '/quick-start/key-concepts/' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'Carousel.Root', link: '/reference/carousel-root/' },
            { label: 'Carousel.Wrapper', link: '/reference/carousel-wrapper/' },
            { label: 'Carousel.Slide', link: '/reference/carousel-slide/' },
            { label: 'Carousel.Pagination', link: '/reference/carousel-pagination/' },
            { label: 'Carousel.PaginationItem', link: '/reference/carousel-pagination-item/' },
            { label: 'Carousel.PrevButton', link: '/reference/carousel-prev-button/' },
            { label: 'Carousel.NextButton', link: '/reference/carousel-next-button/' },
            { label: 'Carousel.PlayPauseButton', link: '/reference/carousel-play-pause-button/' },
          ],
        },
      ],
      customCss: ['./src/styles/tailwind.css'],
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        'pt-br': {
          label: 'Português',
        },
      },
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
