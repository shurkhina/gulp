const {
  src,
  dest
} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const map = require('gulp-sourcemaps');
const bs = require('browser-sync');

module.exports = function style() {
  return src('src/scss/style.scss')
    .pipe(map.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(prefixer({
      overrideBrowserslist: ['last 3 versions'],
      cascade: false
    }))
    .pipe(map.write('../sourcemaps/'))
    .pipe(dest('build/css/'))
    .pipe(bs.stream())
}