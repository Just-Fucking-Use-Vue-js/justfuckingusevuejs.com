export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/fonts',
    'nuxt-llms',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: false,
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-01-15',

  features: {
    inlineStyles: true
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light',
            dark: 'github-dark',
          },
        },
      },
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  llms: {
    domain: 'https://justfuckingusevuejs.com',
    title: 'Just Fucking Use Vue.js',
    description: 'Why choosing something else over Vue.js is a bad idea.',
  },
})
