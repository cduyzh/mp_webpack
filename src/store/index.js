// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import account from './modules/account'
import mall from './modules/mall'
import organization from './modules/organization'
// import { get as _get } from 'lodash'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // globalArg: _get(wx.getStorageSync('lemo_card'), 'account.count', 0)
    },
    getters,
    actions,
    mutations,
    modules: {
        account,
        mall,
        organization,
    },
    // plugins: [
    //     createPersistedState({
    //         key: 'lemo_card',
    //         storage: {
    //             getItem: key => wx.getStorageSync(key),
    //             setItem: (key, value) => wx.setStorageSync(key, value),
    //             removeItem: key => wx.clearStorage()
    //         }
    //     })
    // ]
})

// 热更新
if (module.hot) {
    module.hot.accept(
        [
            // state不支持热更新
            './getters',
            './actions',
            './mutations',
            './modules/account',
            './modules/mall',
            './modules/organization',
        ],
        () => {
            store.hotUpdate({
                // 获取更新后的模块。因为 babel 6 的模块编译格式问题，这里需要加上 .default
                getters: require('./getters').default,
                actions: require('./actions').default,
                mutations: require('./mutations').default,
                modules: {
                    account: require('./modules/account').default,
                    mall: require('./modules/mall').default,
                    organization: require('./modules/organization').default,
                }
            })
        }
    )
}

// const storeContext = require.context('@/store/modules', true, /\.js$/)

// storeContext.keys().forEach((modules) => {
//     store.registerModule(modules.replace(/(^\.\/)|(\.js$)/g, ''), storeContext(modules).default)
// })

// Vue.prototype.$store = store
export default store