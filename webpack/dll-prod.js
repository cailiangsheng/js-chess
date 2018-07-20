const baseProd = require('./base-prod')
const dllManifest = require('../dll/libs.manifest.json')

module.exports = baseProd(dllManifest)
