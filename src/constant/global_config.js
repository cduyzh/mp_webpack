/**
 * 全局的配置文件
 */
const configure = {}
// 测试环境
configure.devEnv = false
// 项目名
configure.projectName = 'xj0'
// 服务器环境
configure.is_server = false
// 接口环境开关
configure.isDevEnv = true
// 暴露给用户的端口号，由nginx监听后转发给node端口号。正式环境使用偶数端口号
configure.exposePort = configure.devEnv ? 29963 : 80
// 请求协议，可改为https
configure.httpProtocal = configure.is_server ? 'https:' : 'https:'
// 暴露给用户的主机名，不含端口号  测试环境
configure.hostname = configure.isDevEnv ? 'https://api.dev.xiaojing0.com' : 'https://xiaojing0.com'
// 暴露给用户的主机名，包含端口号
Object.defineProperty(configure, 'host', {
    get() {
        return configure.exposePort === 80 ? configure.hostname : `${configure.hostname}`
    }
})
// nginx会把80端口的dev_xxx_wechat访问转发到测试环境端口的wechat上，把xxx_wechat转发到正式环境端口的wechat上
// 这个地址需要配置到公众号的“接口配置信息”中
Object.defineProperty(configure, 'apiPrefixForNginx', {
    get() {
        // 托管在会众的服务器上，又没有独立域名的项目
        // eslint-disable-next-line
        const managedByMeetin = true
        return ''
    }
})
// 项目名
configure.gProjectName = 'xj0'
// 资源请求地址
configure.gPublicBaseUrl = configure.devEnv ? `${configure.host}/static/` : 'http://ojejn0mbe.bkt.clouddn.com/static/'
// 入口名
configure.gEntryName = 'partner'
// 入口路径
configure.gEntryBaseUrl = '/partner'

/** ******************常量表******************* */

// 分享出去的url中标识分享者的id
configure.URL_MEMBER_ID_KEY = 'member_id'
// cookie存在storage中的key
configure.COOKIE_STORAGE_KEY = 'cookie'
// 登录态存在storage中的key
configure.IS_LOGIN_STORAGE_KEY = 'IS_LOGIN'

// websocket url
configure.wssUrl = configure.isDevEnv ? 'wss://cardapi.hellobyebye.com/websocket/add' : 'wss://cardapi.meetin.co/websocket/add'
// img upload url
configure.API_FILE_UPLOAD = configure.isDevEnv ? `${configure.httpProtocal}//cardapi.hellobyebye.com/lemoapipy/picupload/upload` : `${configure.httpProtocal}//cardapi.meetin.co/lemoapipy/picupload/upload`

// configure.wssUrl = 'wss://cardapi.meetin.co/websocket/add'

module.exports = configure
