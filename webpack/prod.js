const merge = require('webpack-merge')
const common = require('./common')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
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
