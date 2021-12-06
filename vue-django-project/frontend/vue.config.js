const FileManagerPlugin = require('filemanager-webpack-plugin-fixed');

module.exports = {
  // options...
  devServer: {
    disableHostCheck: true,
    index: 'home.html',
  },

  transpileDependencies: [
    'vuetify'
  ],

  outputDir: 'dist',
  publicPath: '/',
  assetsDir: 'static', // default : ''

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

  configureWebpack: {
    plugins: [
      new FileManagerPlugin({
        onStart: {
          delete: [
            '../backend/static/**/',
            '../backend/templates/**/'
          ]
        },
        onEnd: {
          copy: [
            { source: 'dist/static', destination: '../backend/static/' },
            { source: 'dist/favicon.ico', destination: '../backend/static/img/' },
            { source: 'dist/home.html', destination: '../backend/templates/' },
            { source: 'dist/post*.html', destination: '../backend/templates/blog/' },
          ]
        }
      })
    ]
  }
}
