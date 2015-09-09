/**
 * @fileOverview gulp配置
 * @XiaoBin Li 
 */

var gulp = require('gulp');

require('./gulp/amd');
require('./gulp/scss');
require('./gulp/templates');
require('./gulp/minifyHtml');
require('./gulp/concat');
require('./gulp/deploy');
require('./gulp/server');

gulp.task('deploy', [
    'deployTasks'
]);
