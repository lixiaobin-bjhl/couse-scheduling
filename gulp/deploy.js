/**
 * @fileOverview  deploy task 集合
 * @author XiaoBin Li
 */
 
'use strict';

var gulp = require('gulp');

gulp.task('deployTasks', [
        'concatJs',
        'concatCss',
        'amd',
        'minifyHtml',
        'templates',
        'sass'
    ]
);


