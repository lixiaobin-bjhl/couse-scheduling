/**
 * @fileOverview 排课-模块
 * @author XiaoBin Li
 */

define(function (require) {

    'use strict';

    require('module/room/module');
    require('module/teacher/module');
    require('./templates');

    require('common/ngAnimation/module');
    require('common/ngDirective/module');
    require('common/ngFilter/module');
    require('common/ngService/module');

    require('js-library/ngAnimation/module');
    require('js-library/ngDirective/module');
    require('js-library/ngService/module');
    require('js-library/ngFilter/module');
});