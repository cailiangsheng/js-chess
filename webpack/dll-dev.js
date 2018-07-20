const baseDev = require('./base-dev')
const dllManifest = require('../dist/libs.dll.manifest.json')

module.exports = baseDev(dllManifest)
