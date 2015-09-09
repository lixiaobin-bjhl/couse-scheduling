/**
 * @fileOverview XiaoBin Li
 * @author 合并js
 */
 
'use strict';

var gulp = require('gulp');
var rjs = require('requirejs');

var jsLibrary = '../../js-library/src';

var amdOptions = {
    baseUrl: 'src',
    paths: {
        'ng-templates': 'templates'
    },
    packages: [
        {
            name: 'js-library',
            location: jsLibrary,
            main: 'async'
        }
    ],
    name: 'main',
    out: 'output/src/main.js',
    optimize: 'uglify2',
    uglify2: {
        mangle: false
    }
};

gulp.task('amd', function (cb) {
    rjs.optimize(
        amdOptions,
        function () {
            console.log('合并模块完成');
            cb();
        }
    );
});