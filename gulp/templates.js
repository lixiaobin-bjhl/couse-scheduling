/**
 * @fileOverview 合并模板
 * @author XiaoBin Li
 */

'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var minifyHtml = require('gulp-minify-html');

var options = {
    spare: true,
    empty: true,
    quotes: true,
    comments: true
};

gulp.task('templates', function () {
    gulp.src('./src/**/*.html')
        .pipe(minifyHtml(options))
        .pipe(templateCache({
            root: 'src'
        }))
        .pipe(gulp.dest('./src'))
        .pipe(gulp.dest('./output/src'));
    console.log('模板合并完成');
});