'use strict'
const path = require('path')
const config = require('../config')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'development'
    ? config.dev.assetsSubDirectory
    : config.build.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}
