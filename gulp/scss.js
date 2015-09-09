/**
 * @fileOverview resolve scss
 * @author XiaoBin Li
 */

'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
    gulp.src('./src/resource/css/main.scss')
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('./src/resource/css'))
        .pipe(gulp.dest('./output/src/resource/css'));
    console.log('scss处理完成');
});