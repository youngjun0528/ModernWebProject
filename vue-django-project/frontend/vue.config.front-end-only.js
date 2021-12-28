// front-end only

module.exports = {
  // options...
  devServer: {
    disableHostCheck: true,
    index: 'home.html',
    proxy: {
      // backend url
      '^/api' : {
        target: 'http://127.0.0.1:8000'
      },
      '^/admin' : {
        target: 'http://127.0.0.1:8000'
      },
      '^/static' : {
        target: 'http://127.0.0.1:8000'
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ],

  pages: {
    home: {
      template: 'public/index.html',
      entry: 'src/pages/main_home.js',
      filename: 'home.html',
      title: 'VueDjangoProject/home.html',
      minify: false,
    },

    post_list: {
      template: 'public/index.html',
      entry: 'src/pages/main_post_list.js',
      filename: 'post_list.html',
      title: 'VueDjangoProject/post_list.html',
      minify: false,
    },

    post_detail: {
      template: 'public/index.html',
      entry: 'src/pages/main_post_detail.js',
      filename: 'post_detail.html',
      title: 'VueDjangoProject/post_detail.html',
      minify: false,
    }
  },

  css: {
    extract : {ignoreOrder: true }
  },
}
