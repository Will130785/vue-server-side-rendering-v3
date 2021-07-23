const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const path = require('path')
const srcPath = path.resolve(process.cwd(), 'src')

module.exports = merge(baseConfig, {
  entry: path.join(srcPath, 'client-entry.js'),
  plugins: [
    new VueSSRClientPlugin()
  ]
})
