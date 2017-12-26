const address = require('./config')

// console.log('address', address)
// console.log('process.env.NODE_CONFIG', process.env.NODE_CONFIG)
// console.log('process.env.NODE_ENV', process.env.NODE_ENV)

module.exports = {
  env: {
    NODE_CONFIG: process.env.NODE_CONFIG || 'dev'
  },
  cache: true,
  transition: 'page',
  /*
   ** Headers of the page
   */
  head: {
    title: 'NUXT-TEMPLATE',
    meta: [{
      charset: 'utf-8'
    }, {
      hid: 'keyword',
      name: 'keyword',
      content: 'Universal Vue.js Application Framework'
    }, {
      hid: 'description',
      name: 'description',
      content: 'Nuxt.js 十分简单易用。一个简单的项目只需将 nuxt 添加为依赖组件即可。'
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: address.CDN_ADDRESS + '/favicon.ico'
    }]
  },

  router: {
    middleware: ['ssr-cookie']
  },
  modules: [
    ['@nuxtjs/proxy']
  ],
  proxy: {
    '/api': {
      target: address.SERVER_ADDRESS,
      ws: false
    },
    '/sso': {
      target: address.SERVER_ADDRESS + '/api',
      ws: false
    }
  },

  /*
   ** Global CSS '~/node_modules/element-ui/lib/theme-default/index.css',
   * ~/theme/index.css
   */
  css: ['~/assets/scss/index.scss', '~plugins/libs/swiper/swiper.css'],
  /*
   ** Add axios globally
   */
  plugins: [
    '~plugins/libs/element-ui',
    '~plugins/filter/',
    '~plugins/directive/',
    '~plugins/utils',
    { src: '~plugins/libs/swiper/swiper.js', ssr: false }
  ],

  build: {
    filenames: {
      css: 'styles.[chunkhash].css'
    },
    extractCSS: true,
    vendor: ['axios', 'element-ui'],
    babel: {
      plugins: [
        ['component', [{
          libraryName: 'element-ui',
          styleLibraryName: 'theme-chalk'
        }]]
      ]
    },
    publicPath: address.CDN_ADDRESS
  },
  /*
   ** Run ESLINT on save
   */
  extend(config, ctx) {
    if (ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      })
    }
  }
}
