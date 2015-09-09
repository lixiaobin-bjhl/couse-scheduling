/**
 * @fileOverview server
 * @author XiaoBin Li
 */

'use strict';

var gulp = require('gulp');
var Hapi = require('hapi');
var routes = require('../mock/routes').routes;
var server = new Hapi.Server();

/**
 * 项目路径 
 * @const
 */
var APP_PATH = 'course-scheduling';

gulp.task('server:start',  function () {

    var appServer = server.connection({
        host: '0.0.0.0',
        port: 8002
    });

    appServer.path('../');

    /**
     * 去除字符串后面的问号
     * @param {string} str
     */
    function removeParams(str) {
        var index = str.lastIndexOf('?');
        if (index > -1) {
            return str.slice(0, index);
        }
        return str;
    }

    server.route({
        method: 'GET',
        path: '/src/resource/css/{name}.css',
        handler: function (request, reply) {
            reply.file(APP_PATH + '/src/resource/css/' + request.params.name + '.css');
        }
    });

    server.route({
        method: 'GET',
        path: '/src/{param*}',
        handler: function (request, reply) {
            reply.file(APP_PATH + removeParams(request.url.href));
        } 
    });

    server.route({
        method: 'GET',
        path: '/src/common/{param*}',
        handler: function (request, reply) {
            reply.file(APP_PATH + removeParams(request.url.href)); 
        }
    });

    server.route({
        method: 'GET',
        path: '/js-library/{param*}',
        handler: function (request, reply) {
            reply.file(removeParams(request.url.href).slice(1)); 
        }
    });

    server.route({
        method: 'GET',
        path: '/{name}.html',
        handler: function (request, reply) {
            reply.file(APP_PATH + '/' + request.params.name + '.html');
        }
    });

    server.route({
        method: 'GET',
        path: '/output/{param*}',
        handler: function (request, reply) {
            reply.file(APP_PATH + removeParams(request.url.href));
        } 
    });

    routes.forEach(function (item) {
        server.route(item);
    });

    server.start(function () {
        console.log('Server Started at', server.info.protocol + '://localhost:' + server.info.port);
        gulp.watch('./src/**/*.html', ['templates']);
        gulp.watch('./src/**/*.scss', ['sass']);
    });
});

