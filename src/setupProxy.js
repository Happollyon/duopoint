const { createProxyMiddleware }= require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/v1/',
        { target:'http://api.giphy.com',changeOrigin: true}

    ));
    app.use(createProxyMiddleware('/backend/',
        { target:'http://127.0.0.1:5000',changeOrigin: true,pathRewrite: {
                '^/backend/':'' //remove /service/api
            }}));
}