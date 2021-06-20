// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import Vuex from 'vuex'
// Vue.use(Vuex);

// var store = new Vuex.Store({
//   state: {
//     msg: "共享数据",
//     n: 100
//   },
//   // getters同步获取数据
//   getters: {
//     fn1(state) {
//       return state.n + 10
//     }
//   },
//   /*
//   组件内部想要修改store仓库中的数据，就通过调用mutations中的方法
//   */
//   // mutations同步修改数据 --- actions同步修改数据
//   // 传两个参数(state,obj)
//   // 第一个参数系统自己传，就是state，第二个参数是调这个方法的人传
//   mutations: {
//     fn1(state, obj) {
//       state.n = obj
//     }
//   }
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
