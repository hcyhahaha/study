import Vue from 'vue'
import Vuex from 'vuex'
// 挂载Vuex
Vue.use(Vuex)

const store = new Vuex.Store({
    // state 中存放的就是全局共享的数据
    state: {
        msg: "这是共享信息",
        num: 100
    },
    // getters同步获取数据
    getters: {
        fn1(state) {
            return state.num * 10
        }
    },
    // 组件内部想要修改store仓库中的数据，就通过调用mutations中的方法
    // mutations同步修改数据 --- actions同步修改数据
    // 传两个参数(state,obj)
    // 第一个参数系统自己传，就是state，第二个参数是调这个方法的人传
    mutations: {
        fn1(state, obj) {
            state.msg = obj.name
            state.num = obj.age
        }
    },
    // actions: {
    //     // 默认第一个参数传一个跟store一样的对象
    //     fn1(context, obj) {
    //         // 假设fnAsync是一个异步操作函数
    //         fnAsync(() => {
    //             context.commit("fn1", obj)
    //         })
    //     }
    // }
})
export default store;