const path = require('path')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const packageJSON = require('./package.json')

const outputDir = './dist/dll'

module.exports = {
  entry: {
    vendor: Object.keys(packageJSON.dependencies).concat(['babel-polyfill'])
  },
  output: {
    path: path.resolve(__dirname, outputDir),
    filename: '[name].dll.js',
    library: '[name]_dll',
    sourceMapFilename: '[name].dll.map.js'
  },
  devtool: '#source-map',
  plugins: [
    new CleanWebpackPlugin([path.basename(outputDir)], {root: path.dirname(path.resolve(__dirname, outputDir))}),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, outputDir, 'manifest.json'),
      context: path.resolve(__dirname, outputDir),
      name: '[name]_dll'
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
}
