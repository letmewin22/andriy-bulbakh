const config = require('../config')
const nunjucksRender = require('gulp-nunjucks-render')
const prettify = require('gulp-prettify')
const frontMatter = require('gulp-front-matter')
const { src, dest } = require('gulp')
const webphtml = require('gulp-webp-html')
const gulpif = require('gulp-if')

function html(bs) {

  nunjucksRender.nunjucks.configure({
    watch: false,
    trimBlocks: true,
    lstripBlocks: false
  })

  return src([config.src.templates + '/**/[^_]*.html'])
    .pipe(nunjucksRender({
      path: ['src/templates/'] // String or Array
    }))
    .pipe(frontMatter({ property: 'data' }))
    .pipe(nunjucksRender({
      PRODUCTION: config.production,
      path: [config.src.templates]
    }))
    .pipe(gulpif(config.production, webphtml()))
    .pipe(prettify({
      indentSize: 2,
      wrapAttributes: 'auto', // 'force'
      preserveNewlines: false,
      // unformatted: [],
      endWithNewline: true
    }))
    .pipe(dest(config.build.html))
    .pipe(bs.stream())
}

module.exports = html
