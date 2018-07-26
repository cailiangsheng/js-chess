const path = require('path')

const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')

const exec = require('child_process').exec

const outputDir = '../dist'
const useDevServer = process.env.DEV_SERVER !== undefined
const useDLL = process.env.DLL !== undefined
const entry = useDLL ? {} : { libs: require('./libs') }

module.exports = {
	entry: Object.assign(entry, {
		app: 'src/index.js'
	}),
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
	plugins: getPlugins(),
	resolve: {
		modules: [
			path.resolve('./'),
			path.resolve('./node_modules')
		],
		alias: {
			HOCS: path.resolve(__dirname, 'components/hocs')
		}
	}
}

function getPlugins () {
	const plugins = [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.$': 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		}),
		new HtmlWebpackPlugin({
			template: 'src/index.ejs',
			inject: 'body'
		}),
		new webpack.HashedModuleIdsPlugin(),
	]

	if (!useDevServer) {
		plugins.unshift(new CleanWebpackPlugin(
			[path.basename(outputDir)],
			{root: path.dirname(path.resolve(__dirname, outputDir))}
		))
	}

	if (useDLL) {
		plugins.unshift(new AddAssetHtmlPlugin([
			{
				filepath: 'dll/libs.js',
				includeSourcemap: false,
				hash: true
			}
		]))
		plugins.unshift(new webpack.DllReferencePlugin({
			context: '..',
			manifest: require('../dll/libs.manifest.json')
		}))
	} else {
		plugins.push(new webpack.optimize.CommonsChunkPlugin('libs'))
	}

	return plugins
}
