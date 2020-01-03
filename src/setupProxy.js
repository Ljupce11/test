const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(proxy('/auth/authentication/api/public/authentication',
        { target: 'https://stage.attainr.io/attainr-core/', changeOrigin: true }
    ));
    app.use(proxy('/auth/authentication/api/public/login',
        { target: 'https://stage.attainr.io/attainr-core/', changeOrigin: true }
    ));
    app.use(proxy('/auth/authentication/api/public/logout',
        { target: 'https://stage.attainr.io/attainr-core/', changeOrigin: true }
    ));
    app.use(proxy('/atnr/api/issuers/8234f938-753b-4bf3-be99-13faadfb3480/recipients',
        { target: 'https://stage.attainr.io/attainr-core/', changeOrigin: true }
    ));
    app.use(proxy('/atnr/api/issuers/8234f938-753b-4bf3-be99-13faadfb3480/credentials',
        { target: 'https://stage.attainr.io/attainr-core/', changeOrigin: true }
    ));
    app.use(proxy('/atnr/api/public/credentials',
        { target: 'https://stage.attainr.io/attainr-core/', changeOrigin: true }
    ));
}