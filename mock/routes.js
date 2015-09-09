
var routesConfig = [
    require('./base').routes
];

var routes = [];

for (var i = 0, l = routesConfig.length; i < l; i++) {
    routes = routes.concat(routesConfig[i]);
}

exports.routes = routes;
