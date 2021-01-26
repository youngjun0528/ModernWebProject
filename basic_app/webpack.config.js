const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageminWebpack = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    inital: "./src/js/inital.js",
    index: "./src/js/index.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 5500,
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .css 파일인 경우
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, "dist"), // 경로
            },
          },
          "css-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img",
              name: "[name].[ext]",
              publicPath: "img",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Index Title",
      hash: true,
      filename: "index.html",
      // excludeChunks : ['multiple'], // entry에서 해당 리스트를 제외한 나머지
      chunks: ["inital", "index"], // entry에서 해당 리스트만 포함
      template: "./src/index.html",
    }),
    // new HtmlWebpackPlugin({
    //     title : 'Multiple Title',
    //     hash : true,
    //     filename : 'multiple.html',
    //     chunks : ['multiple'], // entry에서 해당 리스트만 포함
    //     template: './src/multiple.html'
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].css", // entry에 선언된 객체의 각 프로퍼티가 [name]과 치환되어 파일이 생성
      // index.css, multiple.css
    }),
    // Make sure that the plugin placed after any plugins that added images
    new ImageminWebpack({
      severityError: "warning", // Ignore errors on corrupted images
      minimizerOptions: {
        plugins: ["gifsicle"],
      },
      // Disable `loader`
      loader: false,
    }),
  ],
};
