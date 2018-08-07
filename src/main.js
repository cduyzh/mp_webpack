import Vue from 'vue'
// import mock from '@/libs/mock'
import App from '@/App'
import store from '@/store'
import util from '@/utils/util'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.prototype.$util = util
Vue.use(MpvueRouterPatch)

Vue.config.productionTip = false

const app = new Vue({
    store,
    ...App
})

app.$mount()