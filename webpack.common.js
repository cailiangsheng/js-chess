const path = require('path')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const exec = require('child_process').exec

const packageJSON = require('./package.json')

const outputDir = './dist'

module.exports = {
	entry: {
		vendor: Object.keys(packageJSON.dependencies).concat(['babel-polyfill']),
		app: 'src/index.js'
	},
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, outputDir)
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: ['cache-loader', 'babel-loader'],
				exclude: [/node_modules/, /assets/]
			},
			{
				test: /\.(svg|gif|png|jpg|ico|woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin([path.basename(outputDir)], {root: path.dirname(path.resolve(__dirname, outputDir))}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.$': 'jquery',
			'window.jQuery': 'jquery'
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.ejs',
			inject: 'body'
		}),
		new webpack.HashedModuleIdsPlugin(),
		new webpack.optimize.CommonsChunkPlugin('vendor'),
		{
			apply (compiler) {
				compiler.plugin('done', status => {
					exec(`xcopy "./assets" "${outputDir}/assets" /s/e/r/i/y`)
				})
			}
		}
	],
	resolve: {
		modules: [
			path.resolve('./'),
			path.resolve('./node_modules')
		],
		alias: {
			HOCS: 'components/hocs'
		}
	}
}