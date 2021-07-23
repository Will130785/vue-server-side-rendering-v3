const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
// const htmlWebpackPlugin = require('html-webpack-plugin')
const srcPath = path.resolve(process.cwd(), 'src')

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [srcPath]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [srcPath]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
    // new htmlWebpackPlugin({
    //   template: path.resolve(__dirname, '../index.html')
    // })
  ]
}
