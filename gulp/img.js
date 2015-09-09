/**
 * @fileOverview copy imgs
 * @author XiaoBin Li
 */
 
'use strict';

var gulp = require('gulp');

gulp.task('img', function () {
    gulp
        .src(
            [
                './src/resource/img/*.png',
                './src/resource/img/img/*.jpg',
            ]
        )
        .pipe(gulp.dest('./output/resource/img'));

});