const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')

const fs = require('fs')
const exec = require('child_process').exec

module.exports = function (dllManifest) {
	return merge(common(dllManifest), {
		devServer: {
			publicPath: '/',
			contentBase: './dist',
			hot: true,
			port: 8080
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
		devtool: 'inline-source-map',
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	})
}