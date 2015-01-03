'use strict';
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var less = require('gulp-less');
var path = require('path');

var getBundleName = function () {
  var version = require('./package.json').version;
  var name = require('./package.json').name;
  return version + '.' + name + '.' + 'min';
};

gulp.task('less', function () {
  gulp.src('./assets/css/*.less')
   .pipe(sourcemaps.init())
    .pipe(less({
      paths: ['./assets/css/base.less'],
      compress: true
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('javascript', function() {
   console.log('browserifying');
  var bundler = browserify({
    entries: ['./client-app.js'],
    debug: true
  });

  var bundle = function() {
    return bundler
      .bundle()
      .pipe(source(getBundleName() + '.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        // .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/javascripts/'));
  };

  return bundle();
});

gulp.task('watch', function() {
   console.log('watching for changes...');
   gulp.watch(['client-app.js', 'client-app/**/*.js'], ['javascript']);
   gulp.watch('assets/**/*.less', ['less']);
});

gulp.task('default', ['javascript', 'less', 'watch'], function() {
  // place code for your default task here

});