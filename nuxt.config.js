module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Descomplicando aplicações Serverless na AWS com Node.js!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'og:title',
        content: 'Descomplicando aplicações Serverless na AWS com Node.js!',
      },
      { name: 'og:site_name', content: 'NodeBR Treinamento' },
      {
        name: 'og:description',
        content:
          'O mais completo treinamento sobre aplicações serverless com AWS do Brasil',
      },
      {
        name: 'og:image',
        content: 'https://serverlessaws.netlify.com/banner.png',
      },
      { name: 'og:image:type', content: 'image/png' },
      {
        hid: 'description',
        name: 'description',
        content:
          'O mais completo treinamento sobre aplicações serverless com AWS do Brasil',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lobster+Two',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    'nuxt-buefy',
    [
      '@nuxtjs/google-analytics',
      { 
        id: 'UA-128635478-1',
      },
    ],
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
