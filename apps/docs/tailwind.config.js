import starlightPlugin from '@astrojs/starlight-tailwind'

const accent = { 200: '#95d0ff', 600: '#0072af', 900: '#003556', 950: '#00263f' }
const gray = {
  100: '#f5f6f8',
  200: '#ebeef0',
  300: '#bfc2c5',
  400: '#868c92',
  500: '#53595e',
  700: '#34393e',
  800: '#10192d',
  900: '#0a0f1a',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
}
