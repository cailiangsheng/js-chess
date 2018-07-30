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
	'vue/dist/vue.common',
	'vuex'
]

const useVue = process.env.VUE !== undefined

const dependencies = useVue ? vueLibs : reactLibs

module.exports = dependencies.concat(['babel-polyfill'])
