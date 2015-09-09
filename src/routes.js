/**
 * @fileOverview 排课-路由
 * @author XiaoBin Li
 */

define(function (require) {

    'use strict';

    var routes = {};

    $.extend(routes, 
        require('./module/room/route'),
        require('./module/teacher/route')
    );

    angular.module('app')
        .config(['$stateProvider', function ($stateProvider) {

            $.each(routes, function (key, item) {
                $stateProvider
                    .state(key, item);
            });

        }]);
});