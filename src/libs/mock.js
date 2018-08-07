import Mock from './mock.config'
import configure from '../constant/global_config'

/**
 * 根据接口地址生成适用于httpRequestor的正则表达式
 * @param {string} api 接口地址，格式如/account/signin
 * @return {RegExp}
 */
function makeUrlRegExp (api) {
    let url = api.includes('//') ? api : configure.hostname + api
    url = url.replace('.', '\\.')
    if (url.includes('?')) {
        url = url.replace('?', '\\?')
        url += '&_=.+'
    } else {
        url += '\\?_=.+'
    }
    return new RegExp(url)
}

/**
 * 拦截HttpRequestor发出的请求，并返回假数据。支持正式环境和测试环境
 * @param {string} url 接口地址，格式如/account/signin
 * @param {*} data 要返回的假数据
 */
function mockHttpRequestor (url, data) {
    Mock.mock(makeUrlRegExp(url), data)
}

// 获取足迹
mockHttpRequestor('/workbench_api/xkjl/footprint/get_footprint', {
    data: {
        footPrint: [
            {
                commodityId: 'xxxx',   // 商品Id
                mallName: '熊孩子',       // 商城名字
                campusId: 'xxxx',      // 校区Id
                title: '学习长生不老',         // 商品名
                classTime: 'xxxx',     // 上课时间
                price: 25000,         // 价格
                icon: 'https://pre00.deviantart.net/206a/th/pre/f/2018/196/c/6/blaser_by_peterku-dchal8r.jpg',           // 商品图标
                isOnline: false,  // 是否是线上课程
                status: 1,    // 报名状态, 0: 未报名 1: 报名中 2: 已报名
                commodityUnit: 1, // 商品计量单位
                containNum: 48         // 单位数量
            },
            {
                commodityId: 'xxx',   // 商品Id
                mallName: '熊孩子',       // 商城名字
                campusId: 'xxxx',      // 校区Id
                title: '学习长生不老',         // 商品名
                classTime: 'xxxx',     // 上课时间
                price: 25000,         // 价格
                icon: 'https://pre00.deviantart.net/206a/th/pre/f/2018/196/c/6/blaser_by_peterku-dchal8r.jpg',           // 商品图标
                isOnline: false,  // 是否是线上课程
                status: 1,    // 报名状态, 0: 未报名 1: 报名中 2: 已报名
                commodityUnit: 1, // 商品计量单位
                containNum: 48         // 单位数量
            },
        ],
        groupCommodity: [
            {
                commodityId: 'xxxx',        // 商品Id
                groupCommodityId: 'xxx',     // 拼团商品Id
                groupMemberPrice: 23000,   // 拼团时成员的购买单价
                groupMasterPrice: 22000,   // 拼团时团长的购买单价
            }
        ]
    },
    status: {
        code: 0,
        message: 'xxx'
    }
})