const path = require('path')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const packageJSON = require('../package.json')
const dependencies = Object.keys(packageJSON.dependencies).concat(['babel-polyfill'])

const outputDir = '../dll'

module.exports = {
  entry: {
    libs: dependencies
  },
  output: {
    path: path.resolve(__dirname, outputDir),
    filename: '[name].js',
    library: '[name]',
    sourceMapFilename: '[name].map.json'
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new CleanWebpackPlugin([path.basename(outputDir)], {root: path.dirname(path.resolve(__dirname, outputDir))}),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, outputDir, '[name].manifest.json'),
      context: path.resolve(__dirname, outputDir),
      name: '[name]'
    }),
    new UglifyJsPlugin({
      sourceMap: true
    })
  ]
}
