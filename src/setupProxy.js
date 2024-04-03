const { createProxyMiddleware: proxy } = require('http-proxy-middleware')
module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://jbrpc.yyinhong.cn/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
}
