'use strict';

var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpRev = require('gulp-rev');
var gulpRevCollector = require('gulp-rev-collector');
var gulpRevReplace = require('gulp-rev-replace');
var gulpUglify = require('gulp-uglify');
var gulpUniqueFiles = require('gulp-unique-files');
var gulpUseRef = require('gulp-useref');
var gulpCleanCSS = require('gulp-clean-css');
var gulpResponsive = require('gulp-responsive');
var gulpImgRetina = require('gulp-img-retina');
var del = require('del');

var dirs = {
  public: 'public',
  screenshots: 'public/build/screenshots'
};

var retinaSuffix = {
  1: '',
  2: '@2x'
};

gulp.task('useref', ['screenshot'], function() {
  var assets = gulpUseRef.assets({
    searchPath: 'public'
  });

  return gulp.src('public/**/*.html')
    .pipe(assets)
    .pipe(gulpUniqueFiles())
    .pipe(gulpIf('*.js', gulpCleanCSS()))
    .pipe(gulpIf('*.js', gulpUglify()))
    .pipe(gulpRev())
    .pipe(assets.restore())
    .pipe(gulpUseRef())
    .pipe(gulpRevReplace({
      prefix: '/'
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('screenshot:clean', function() {
  return del([dirs.screenshots + '/**/*']);
});

gulp.task('screenshot:rev', ['screenshot:clean'], function() {
  return gulp.src('public/themes/screenshots/*.png')
    .pipe(gulpRev())
    .pipe(gulp.dest(dirs.screenshots))
    .pipe(gulpRev.manifest())
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('screenshot:revreplace', ['screenshot:rev'], function() {
  return gulp.src([dirs.screenshots + '/rev-manifest.json', 'public/themes/index.html'])
    .pipe(gulpRevCollector({
      replaceReved: true,
      dirReplacements: {
        '/themes/screenshots': '/build/screenshots'
      }
    }))
    .pipe(gulpImgRetina({
      suffix: retinaSuffix
    }))
    .pipe(gulp.dest('public/themes'));
});

gulp.task('screenshot:resize', ['screenshot:rev'], function() {
  return gulp.src(dirs.screenshots + '/*.png')
    .pipe(gulpResponsive({
      '*.png': [
        {
          width: 400
        },
        {
          rename: {
            suffix: retinaSuffix[2]
          }
        }
      ]
    }, {
      progressive: true
    }))
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('screenshot', ['screenshot:rev', 'screenshot:resize', 'screenshot:revreplace']);
gulp.task('default', ['useref', 'screenshot']);
