// const packageJSON = require('../package.json')
// const dependencies = Object.keys(packageJSON.dependencies)

const dependencies = [
	'react',
	'react-dom',
	'prop-types',
	'classnames',
	'lodash'
]

module.exports = dependencies.concat(['babel-polyfill'])
