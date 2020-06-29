const { createProxyMiddleware }= require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/v1/',
        { target:' http://api.giphy.com',changeOrigin: true}

    ));
    app.use(createProxyMiddleware('/backend/',
        { target:'https://duopointapi.herokuapp.com/',changeOrigin: true,pathRewrite: {
                '^/backend/':'' //remove /service/api
            }}));
}