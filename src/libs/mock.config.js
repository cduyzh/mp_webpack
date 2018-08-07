import Mock from 'mockjs'
import wxApi from '../utils/wx_api'
let __request = wx.request

Object.defineProperty(wx, 'request', {writable: true})
console.log('mock')
wx.request = function (config) {
    let url = config.url
    url = url.replace('.', '\\.')
    if (url.includes('?')) {
        url = url.replace('?', '\\?')
        url += '&_=.+'
    } else {
        url += '\\?_=.+'
    }
    url = new RegExp(url)
    if (typeof Mock._mocked[url] === 'undefined') {
        __request(config)
        return
    }
    let resTemplate = Mock._mocked[url].template
    let response = Mock.mock(resTemplate)
    if (typeof config.success === 'function') {
        return config.success(response)
    }
    if (typeof config.complete === 'function') {
        config.complete(222222222222, response)
    }
    // return response
}
wxApi.request = wx.request
export default Mock
