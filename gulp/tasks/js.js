const { src, dest } = require('gulp')
const webpack = require('webpack-stream')
const webpackConfig = require('../../webpack.config.js').createConfig

const config = require('../config')

// webpack
function js(bs) {
  return src(config.src.js)
    .pipe(webpack(webpackConfig(config.env)))
    .pipe(dest(config.build.js))
    .pipe(bs.stream())
}

module.exports = js
