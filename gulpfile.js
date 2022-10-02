var { src, dest, watch } = require('gulp');
var sass = require('gulp-sass')(require('sass'));
sass.compiler = require('node-sass');

function createCSS() {
  return src('src/*.scss')
      .pipe(sass())
      .pipe(dest('dist/css'))
}

exports.default = function () {
  watch('src/*.scss', createCSS)
};