// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/icon",
    "vue3-carousel-nuxt",
    "nuxt-swiper",
    "@hypernym/nuxt-gsap",
  ],
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
    }
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },

  devtools: { enabled: true },
  css: ["~/assets/css/index.css"],

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.4.0/socket.io.js",
          integrity:
            "sha512-Y8KodDCDqst1e8z0EGKiqEQq3T8NszmgW2HvsC6+tlNw7kxYxHTLl5Iw/gqZj/6qhZdBt+jYyOsybgSAiB9OOA==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        {
          src: "https://scripts.sirv.com/sirvjs/v3/sirv.js",
        },
        {
          src: 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js',
          type: 'module',
        },
        {
          src: "https://cdn.socket.io/4.8.1/socket.io.min.js",
          integrity:
            "sha384-mkQ3/7FUtcGyoppY6bz/PORYoGqOl7/aSUMn2ymDOJcapfS6PHqxhRTMh1RR0Q6+",
          crossorigin: "anonymous",
        },

      ],
      meta: [
        {
          "http-equiv": "Content-Type",
        },
      ],
    },
  },
  compatibilityDate: "2025-03-27",
});