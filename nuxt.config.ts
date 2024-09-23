// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-04-03',
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
      API_KEY: process.env.API_KEY,
    }    
  },
  devtools: { enabled: false },
  app: {

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [      
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/logo-nex-2.png'
        },             
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css'
        },
        {
          rel: 'stylesheet',
          href:'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css'
        },
        {
          rel: 'stylesheet',
          href:'/main.css?v=1.0.6'
        },
      ],
      script: [{
          src: "https://code.jquery.com/jquery-3.6.0.min.js",          
        },       
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
        },              
        {
          src: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        },    
      ],
    },
  },  
  modules: [
    'vue3-carousel-nuxt'
  ],

})
