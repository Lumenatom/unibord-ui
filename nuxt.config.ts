export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],
  css: ['assets/css/global.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',

  },
  tailwindcss: {
    cssPath: '~/assets/css/global.css',
    config: {
      darkMode: 'class',
    },
  },
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  },
  runtimeConfig: {
    APP_NAME: process.env.APP_NAME,
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL,
      API_URL_ROOT: process.env.NUXT_PUBLIC_API_URL_ROOT,
    },
  },

  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})