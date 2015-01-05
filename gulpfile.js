'use strict';

//use commonJS modules on the client
var browserify = require('browserify');
var gulp = require('gulp');

//this stuff is so we can stream text through things
//with a simple api
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

//minify js
var uglify = require('gulp-uglify');

//sourcemaps
var sourcemaps = require('gulp-sourcemaps');

//inline html with require('foo.html')
var partialify = require('partialify');
//wrap globals so var angular = require('angular)'
var exposify = require('exposify');

var less = require('gulp-less');
var path = require('path');

exposify.config = { angular: 'angular'};

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
      transform: [partialify, exposify],
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
      .pipe(uglify())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public/javascripts/'));
  };

  return bundle();
});

gulp.task('watch', function() {
   console.log('watching for changes...');
   gulp.watch(['client-app.js', 'client-app/**/*.js', 'client-app/**/*.html'], ['javascript']);
   gulp.watch('assets/**/*.less', ['less']);
});

gulp.task('build', ['javascript', 'less'], function() {
  console.log('all done');
});

gulp.task('default', ['javascript', 'less', 'watch'], function() {
  console.log('ready');
});