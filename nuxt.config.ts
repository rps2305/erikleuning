// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    generate:{
      nojekyll: true, //not working on this version
      fallback: '404.html',
    },
    ssr: false, //When false
    target: "static", // and static, nuxt generates a SPA

    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      app: {
        baseURL: "/erikleuning/"
    },

})
