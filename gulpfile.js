'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var cssnano = require('cssnano');

var dirs = {
  public: 'public',
  screenshots: 'public/build/screenshots'
};

gulp.task('useref', ['screenshot'], function(){
  var assets = $.useref.assets({
    searchPath: 'public'
  });

  return gulp.src('public/**/*.html')
    .pipe(assets)
    .pipe($.uniqueFiles())
    .pipe($.if('*.css', $.postcss([
      cssnano()
    ])))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace({
      prefix: '/'
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('screenshot:rev', function(){
  return gulp.src('public/themes/screenshots/*.png')
    .pipe($.rev())
    .pipe(gulp.dest(dirs.screenshots))
    .pipe($.rev.manifest())
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('screenshot:resize', ['screenshot:rev'], function(){
  return gulp.src(dirs.screenshots + '/*.png')
    .pipe($.responsive({
      '*.png': [
        {
          width: 400,
          progressive: true
        },
        {
          progressive: true,
          rename: {
            suffix: '@2x'
          }
        }
      ]
    }))
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('screenshot:revreplace', ['screenshot:rev'], function(){
  return gulp.src([dirs.screenshots + '/rev-manifest.json', 'public/themes/index.html'])
    .pipe($.revCollector({
      replaceReved: true,
      dirReplacements: {
        '/themes/screenshots': '/build/screenshots'
      }
    }))
    .pipe(gulp.dest('public/themes'));
});

gulp.task('screenshot', ['screenshot:rev', 'screenshot:resize', 'screenshot:revreplace']);
gulp.task('default', ['useref', 'screenshot']);