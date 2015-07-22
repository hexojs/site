'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var cssnano = require('cssnano');

var htmlMinifierOptions = {
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeOptionalTags: true,
  minifyJS: true,
  minifyCSS: true
};

var dirs = {
  public: 'public',
  screenshots: 'public/build/screenshots'
};

gulp.task('useref', function(){
  var assets = $.useref.assets({
    searchPath: 'public'
  });

  return gulp.src('public/**/*.html')
    .pipe(assets)
    .pipe($.if('*.css', $.postcss([
      cssnano()
    ])))
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace({
      prefix: '/'
    }))
    .pipe($.if('*.html', $.htmlMinifier(htmlMinifierOptions)))
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
  var resizeOptions = {
    width: 400,
    height: 250,
    crop: true
  };

  return gulp.src('public/build/screenshots/*.png')
    // Append "@2x" to the original images
    .pipe($.rename({
      suffix: '@2x'
    }))
    // Copy original images
    .pipe(gulp.dest(dirs.screenshots))
    // Resize images
    .pipe($.imageResize(resizeOptions))
    // Remove "@2x" in filename
    .pipe($.rename(function(path){
      path.basename = path.basename.replace('@2x', '');
      return path;
    }))
    // Save resized images
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