// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/sitemap",
    "nuxt-schema-org",
    "nuxt-og-image",
    "@nuxt/image",
    "@nuxtjs/robots"
  ],

  routeRules: {
    '/': { prerender: true }
  },

  tailwindcss: {
    viewer: true,
  },

  compatibilityDate: '2024-07-24'
})
