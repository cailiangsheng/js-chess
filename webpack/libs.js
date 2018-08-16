// const packageJSON = require('../package.json')
// const dependencies = Object.keys(packageJSON.dependencies)

const reactLibs = [
	'react',
	'react-dom',
	'prop-types',
	'classnames',
	'lodash',
	'react-router-dom'
]

const vueLibs = [
	'lodash',
	'vue/dist/vue.common',
	'vuex',
	'vue-router'
]

const angularLibs = [
	'@angular/core',
	'@angular/common',
	'@angular/router',
	'@angular/platform-browser',
	'@angular/platform-browser-dynamic',
	'zone.js',
	'core-js/es6/reflect', // polyfill for DI
	'core-js/es7/reflect', // polyfill for DI
	'@ngrx/store'
]

const useVue = process.env.VUE !== undefined
const useAngular = process.env.ANGULAR !== undefined
const dependencies = useVue ? vueLibs : (useAngular ? angularLibs : reactLibs)

module.exports = dependencies.concat(['babel-polyfill'])
