// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    generate:{
      nojekyll: true, //not working on this version
      fallback: '404.html',
    },
    

    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      app: {
        baseURL: "/erikleuning/"
    }
})
