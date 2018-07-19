const baseDev = require('./webpack.base-dev')
const dllManifest = require('./dist/dll/manifest.json')

module.exports = baseDev(dllManifest)
