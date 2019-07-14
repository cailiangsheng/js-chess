const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./common')

const fs = require('fs')
const exec = require('child_process').exec

module.exports = merge(common, {
	devServer: {
		publicPath: '/',
		contentBase: '../dist',
		hot: true,
		open: true,
		port: 3000,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				loader: ['style-loader', 'css-loader', 'less-loader']
			}
		]
	},
	stats: {
		colors: true,
		errors: true,
		warnings: true,
		modules: true,
		source: true,
		assets: true
	},
	devtool: '#cheap-module-eval-source-map',
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
})
