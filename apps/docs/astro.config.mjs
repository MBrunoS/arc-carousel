import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Arc Carousel',
      logo: {
        dark: './src/assets/logo-dark.svg',
        light: './src/assets/logo-light.svg',
        replacesTitle: true,
      },
      social: {
        github: 'https://github.com/MBrunoS/arc-carousel',
      },
      sidebar: [
        {
          label: 'Quick Start',
          translations: {
            'pt-BR': 'Início Rápido',
          },
          items: [
            {
              label: 'Getting Started',
              link: '/quick-start/getting-started/',
              translations: { 'pt-BR': 'Primeiros Passos' },
            },
            {
              label: 'Key Concepts',
              link: '/quick-start/key-concepts/',
              translations: { 'pt-BR': 'Conceitos Chave' },
            },
          ],
        },
        {
          label: 'API Reference',
          translations: {
            'pt-BR': 'Referência da API',
          },
          items: [
            { label: 'Carousel.Root', link: '/reference/carousel-root/' },
            { label: 'Carousel.Wrapper', link: '/reference/carousel-wrapper/' },
            { label: 'Carousel.Slide', link: '/reference/carousel-slide/' },
            { label: 'Carousel.Pagination', link: '/reference/carousel-pagination/' },
            { label: 'Carousel.PaginationItem', link: '/reference/carousel-pagination-item/' },
            { label: 'Carousel.PrevButton', link: '/reference/carousel-prev-button/' },
            { label: 'Carousel.NextButton', link: '/reference/carousel-next-button/' },
            { label: 'Carousel.PlayPauseButton', link: '/reference/carousel-play-pause-button/' },
            { label: 'Carousel.Progress', link: '/reference/carousel-progress/' },
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
      components: {
        Hero: './src/components/Hero.astro',
      },
    }),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
