'use strict';

const gulp = require('gulp');
const gulpIf = require('gulp-if');
const gulpRev = require('gulp-rev');
const gulpRevCollector = require('gulp-rev-collector');
const gulpRevReplace = require('gulp-rev-replace');
const gulpUglify = require('gulp-uglify');
const gulpUniqueFiles = require('gulp-unique-files');
const gulpUseRef = require('gulp-useref');
const gulpCleanCSS = require('gulp-clean-css');
const gulpResponsive = require('gulp-responsive');
const gulpCheerio = require('gulp-cheerio');
const del = require('del');
const rename = require('rename');

const dirs = {
  public: 'public',
  screenshots: 'public/build/screenshots'
};

gulp.task('useref', function() {
  return gulp.src('public/**/*.html')
    .pipe(gulpUniqueFiles())
    .pipe(gulpIf('*.css', gulpCleanCSS()))
    .pipe(gulpIf('*.js', gulpUglify()))
    .pipe(gulpRev())
    .pipe(gulpUseRef({
      searchPath: 'public'
    }))
    .pipe(gulpRevReplace({
      prefix: '/'
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('clean', function() {
  return del([dirs.screenshots + '/**/*']);
});

gulp.task('rev', function() {
  return gulp.src('public/themes/screenshots/*.png')
    .pipe(gulpRev())
    .pipe(gulp.dest(dirs.screenshots))
    .pipe(gulpRev.manifest())
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('revreplace', function() {
  const destDir = '/build/screenshots';

  return gulp.src([dirs.screenshots + '/rev-manifest.json', 'public/themes/index.html'])
    .pipe(gulpRevCollector({
      replaceReved: true,
      dirReplacements: {
        '/themes/screenshots': destDir
      }
    }))
    .pipe(gulpCheerio(function($, file) {
      $('img.plugin-screenshot-img.lazyload').each(function() {
        const img = $(this);
        const src = img.attr('data-src') || img.attr('data-org');
        if (!src) return;

        // url encode the image path to handle cases where there is a space in image name
        const srcEncoded = encodeURI(src);

        const jpgPath = replaceBackSlash(rename(srcEncoded, {extname: '.jpeg'}));
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

gulp.task('resize', function() {
  return gulp.src(dirs.screenshots + '/*.png')
    .pipe(gulpResponsive({
      '*.png': [
        {
          width: '50%',
          rename: {
            extname: '.jpg'
          }
        },
        {
          rename: {
            suffix: '@2x',
            extname: '.jpg'
          }
        }
      ]
    }, {
      progressive: true,
      format: 'jpeg',
      quality: 70,
      stats: false
    }))
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('default',
  gulp.series('clean', 'rev', gulp.parallel('resize', 'revreplace'), 'useref'));

function replaceBackSlash(str) {
  return str.replace(/\\/g, '/');
}
