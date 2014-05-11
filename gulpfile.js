var gulp = require('gulp'),
  yuidoc = require('gulp-yuidoc'),
  clean = require('gulp-clean'),
  shell = require('gulp-shell'),
  rename = require('gulp-rename');

gulp.task('clean-hexo', function(){
  return gulp.src('tmp/hexo/', {read: false})
    .pipe(clean());
});

gulp.task('clean-warehouse', function(){
  return gulp.src('tmp/warehouse/', {read: false})
    .pipe(clean());
});

gulp.task('clean-yuidoc', function(){
  return gulp.src('source/_yuidoc/', {read: false})
    .pipe(clean());
});

gulp.task('clean', ['clean-hexo', 'clean-warehouse', 'clean-yuidoc']);

gulp.task('clone-hexo', ['clean-hexo'], shell.task(['git clone https://github.com/tommy351/hexo.git -b dev tmp/hexo']));

gulp.task('clone-warehouse', ['clean-warehouse'], shell.task(['git clone https://github.com/tommy351/warehouse.git -b develop tmp/warehouse']));

gulp.task('clone', ['clone-hexo', 'clone-warehouse']);

gulp.task('yuidoc-hexo', ['clone-hexo'], function(){
  return gulp.src('tmp/hexo/lib/**/*.js')
    .pipe(yuidoc.parser({
      project: require('./tmp/hexo/package.json')
    }))
    .pipe(rename('index.json'))
    .pipe(gulp.dest('source/_yuidoc/'));
});

gulp.task('yuidoc-warehouse', ['clone-warehouse'], function(){
  return gulp.src('tmp/warehouse/lib/**/*.js')
    .pipe(yuidoc.parser({
      project: require('./tmp/warehouse/package.json')
    }))
    .pipe(rename('warehouse.json'))
    .pipe(gulp.dest('source/_yuidoc/'));
});

gulp.task('yuidoc', ['yuidoc-hexo', 'yuidoc-warehouse']);

gulp.task('default', ['yuidoc'], function(){
  return gulp.start('clean-hexo', 'clean-warehouse');
});