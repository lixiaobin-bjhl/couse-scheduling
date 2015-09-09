/**
 * @fileOverview app
 * @author XiaoBin Li
 */

define(function () {

    'use strict';

    angular.module('app', [
        'templates',
        'ui.router',
        'app.room',
        'app.teacher',
        'library.animation',
        'me-pageloading'
    ])
    .config(['mePageLoadingProvider', function (mePageLoadingProvider) {
        mePageLoadingProvider.effect = 'Spill';
    }]);

});