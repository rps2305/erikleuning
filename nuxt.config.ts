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
    "@nuxtjs/robots",
    "@nuxtjs/mdc"
  ],

  routeRules: {
    '/': { prerender: true }
  },

  tailwindcss: {
    viewer: true,
  },
  content: { 
    liveEdit: true,
    page: true, 
      markdown: {
      prerender: {
        render: {
          // https://github.com/markedjs/marked/blob/master/lib/marked.js#L152
          // https://marked.js.org/using_advanced#options
          marked: {
            smartypants: true,
            xhtml: true
          }
        }
      }
    }
  },
  mdc: {
    components: {
      prose: true, // Enable predefined prose components
      map: {
        h6: 'MyCustomPComponent'
      }
    }
  },
  compatibilityDate: '2024-07-24'
})