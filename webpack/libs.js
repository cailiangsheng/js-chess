// const packageJSON = require('../package.json')
// const dependencies = Object.keys(packageJSON.dependencies)

const reactLibs = [
	'react',
	'react-dom',
	'prop-types',
	'classnames',
	'lodash'
]

const vueLibs = [
	'lodash',
	'vue/dist/vue.common'
]

const angularLibs = [
	'@angular/core',
	'@angular/platform-browser',
	'@angular/platform-browser-dynamic',
	'zone.js'
]

const useVue = process.env.VUE !== undefined

const dependencies = angularLibs // useVue ? vueLibs : reactLibs

module.exports = dependencies.concat(['babel-polyfill'])
