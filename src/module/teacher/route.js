/**
 * @fileOverview 排课-老师路由
 * @author XiaoBin Li
 */

define(function (require) {

    'use strict';

    require('./controller'); 

    return {
        teacher: {
            url: '/teacher',
            templateUrl: 'src/module/teacher/tpl.html',
            controller: 'Teacher' 
        }
    };

});