'use strict';

const gulp = require('gulp');
const gulpCheerio = require('gulp-cheerio');
const rename = require('rename');

gulp.task('revreplace', function() {
  return gulp.src(['public/themes/index.html'])
    .pipe(gulpCheerio(function($, file) {
      $('img.plugin-screenshot-img.lazyload').each(function() {
        const img = $(this);
        const src = img.attr('data-src') || img.attr('data-org');
        if (!src) return;

        // url encode the image path to handle cases where there is a space in image name
        const srcEncoded = encodeURI(src);

        const jpgPath = replaceBackSlash(rename(srcEncoded, {extname: '.jpg'}));
        const jpg2xPath = replaceBackSlash(rename(jpgPath, {suffix: '@2x'}));
        const srcset = [
          jpgPath,
          jpg2xPath + ' 2x'
        ].join(', ');

        img.attr('data-src', jpgPath)
          .attr('data-srcset', srcset)
          .attr('data-org', srcEncoded);
      });
    }))
    .pipe(gulp.dest('public/themes'));
});

gulp.task('default', gulp.series('revreplace'));

function replaceBackSlash(str) {
  return str.replace(/\\/g, '/');
}
