module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'https://mall-pre.springboot.cn',
                changeOrigin: true, //如果设置成true：发送请求头中host会设置成target·
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}