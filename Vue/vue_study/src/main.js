import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import less from 'less'
import router from './router.js'
import store from './store.js'

Vue.use(Antd);
Vue.use(less)
Vue.config.productionTip = false

// 中央事件总线
export const Event = new Vue()


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   el: '#app',
//   //一定要注入到vue的实例对象上
//   router,
//   components: { App },
//   template: '<App/>'
// })
