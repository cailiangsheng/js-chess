const path = require('path')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const libs = require('./libs')

const outputDir = '../dll'

module.exports = {
  entry: {
    libs
  },
  output: {
    path: path.resolve(__dirname, outputDir),
    filename: '[name].js',
    library: '[name]',
    // sourceMapFilename: '[name].map.json'
  },
  // devtool: '#cheap-module-eval-source-map',
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: '"production"'
    //   }
    // }),
    new CleanWebpackPlugin([path.basename(outputDir)], {root: path.dirname(path.resolve(__dirname, outputDir))}),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, outputDir, '[name].manifest.json'),
      context: '..',
      name: '[name]'
    }),
    new UglifyJsPlugin({
      // sourceMap: true
    })
  ]
}
