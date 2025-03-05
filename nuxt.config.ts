// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2025-03-04",
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  app: {
    head: {
      title: 'My Nuxt App',
      meta: [
        { name: 'description', content: 'Everything about Nuxt3' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ]
    }
  }
})