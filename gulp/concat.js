/**
 * @fileOverview 合并css、js
 * @author XiaoBin Li
 */

'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

var jsLibrary = '../js-library/';

gulp.task('concatJs', function () {
    return gulp
        .src([
            jsLibrary + '/dep/snap.svg/dist/snap.svg.js',
            jsLibrary + '/dep/requirejs/require.js',
            jsLibrary + '/dep/jquery/dist/jquery.js',
            jsLibrary + '/dep/angularjs/angular.js',
            jsLibrary + '/dep/angular-animate/angular-animate.js',
            jsLibrary + '/dep/angular-ui-router/release/angular-ui-router.js',
            jsLibrary + '/dep/me-pageloading/me-pageloading.js'
        ])
        .pipe(concat('plugins.js'))
        .pipe(uglify())
        .pipe(gulp.dest('output/src/'))
        .pipe(gulp.dest('src/'));
});

gulp.task('concatCss', function () {

    return gulp
        .src([
            jsLibrary + '/dep/me-pageloading/me-pageloading.css'
        ])
        .pipe(concat('plugins.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('output/src/resource/css/'))
        .pipe(gulp.dest('src/resource/css/'));
});