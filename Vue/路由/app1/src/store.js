import Vue from 'vue'
import Vuex from 'vuex'
// 挂载Vuex
Vue.use(Vuex)

const store = new Vuex.Store({
    // state 中存放的就是全局共享的数据
    state: {
        count: 0
    }
})
export default store;