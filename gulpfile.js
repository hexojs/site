'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

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
  screenshots: 'public/themes/screenshots'
};

var paths = {
  screenshots: dirs.screenshots + '/*'
};

gulp.task('useref', function(){
  var assets = $.useref.assets({
    searchPath: 'public'
  });

  return gulp.src('public/**/*.html')
    .pipe(assets)
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

gulp.task('screenshot:resize', function(){
  var resizeOptions = {
    width: 400,
    height: 250,
    crop: true
  };

  return gulp.src(paths.screenshots)
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
    .pipe(gulp.dest(dirs.screenshots))
});

gulp.task('screenshot', ['screenshot:resize']);
gulp.task('default', ['useref', 'screenshot']);