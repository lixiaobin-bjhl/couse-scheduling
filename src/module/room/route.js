/**
 * @fileOverview 排课-教室路由
 * @author XiaoBin Li
 */

define(function (require) {

    'use strict';

    require('./controller'); 

    return {
        room: {
            url: '/room',
            templateUrl: 'src/module/room/tpl.html',
            controller: 'Room' 
        }
    };

});