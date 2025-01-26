// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],
  css: ['assets/css/global.css'],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },
  tailwindcss: {
    cssPath: '~/assets/css/global.css',  // Путь к глобальному файлу стилей
    config: {
      darkMode: 'class',  // Включаем поддержку темной темы через класс
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