// vue-cli的配置文件
module.exports = {
    devServer: {
        proxy: {
            "/api":{
                //转发到开发服务器地址
                target :'http://test.my-site.com'
            },
        }
    }
}
