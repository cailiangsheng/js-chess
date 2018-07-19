const baseProd = require('./webpack.base-prod')
const dllManifest = require('./dist/libs.dll.manifest.json')

module.exports = baseProd(dllManifest)
