/**
 * @fileOverview 排课-mock
 * @author XiaoBin Li(lixiaobin@baijiahulian.com)
 */

exports.routes = [

    // 注册页面的首页
    {
        method: 'GET',
        path: '/register',
        handler: function(request, reply) {
            reply.file('app/register.html');
        }
    }
];