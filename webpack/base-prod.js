const merge = require('webpack-merge')
const base = require('./base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (dllManifest) {
	return merge(base(dllManifest), {
		devtool: "#cheap-module-eval-source-map",
		module: {
			rules: [
				{
					test: /\.css/,
					use: 'css-loader?sourceMap'
				},
				{
					test: /\.less/,
					exclude: /node_modules/,
					use: ExtractTextPlugin.extract({
						use: 'css-loader?sourceMap!less-loader?sourceMap'
					})
				}
			]
		},
		plugins: [
			new ExtractTextPlugin('[name].css', {
				allChunks: true
			})
		]
	})
}
