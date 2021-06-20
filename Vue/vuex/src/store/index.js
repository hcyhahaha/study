import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        msg: "共享数据",
        n: 100
    },
    // getters同步获取数据
    getters: {
        fn1(state) {
            return state.n + 10
        }
    },
    /*
    组件内部想要修改store仓库中的数据，就通过调用mutations中的方法
    */
    // mutations同步修改数据 --- actions异步修改数据
    // 传两个参数(state,obj)
    // 第一个参数系统自己传，就是state，第二个参数是调这个方法的人传
    mutations: {
        fn1(state, obj) {
            state.n = obj
        }
    }
    /*
    actions使用与mutations类似，不过actions使用dispatch提交
    */
})