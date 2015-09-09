/**
 * @fileOverview minify html
 * @author XiaoBin Li
 */

'use strict';

var gulp = require('gulp');
var minifyHtml = require('gulp-minify-html');
var replace = require('gulp-replace');
var moment = require('moment');
var version  = moment(new Date()).format('YYYYMMDDHHmm');

gulp.task('minifyHtml', function () {
    return gulp.src('main.html')
        .pipe(minifyHtml({
            spare: true,
            empty: true,
            quotes: true,
            comments: true
        }))
        .pipe(replace(/@@version/g, version))
        .pipe(gulp.dest('output/'));
        console.log('模板压缩完成');
});