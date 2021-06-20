//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面
import page1 from './page/page1.vue';
//引用page2页面
import page2 from './page/page2.vue';
import edt from './page/edt.vue';
import sports from './page/sports.vue';
import page3 from './page/page3.vue';
// import UserHome from './page/UserHome.vue';
import myvuex from '@/views/vuex/fu.vue';

//定义routes路由的集合，数组类型
const routes = [
    //单个路由均为对象类型，path代表的是路径，component代表组件
    { path: '/page1', component: page1 },
    {
        path: '/page2',
        component: page2,
        children: [
            { path: 'edt', component: edt },
            { path: 'sports', component: sports },
            // { path: '', component: UserHome },
        ]
    },
    { path: '/page3', component: page3 },
    { path: '/vuex', component: myvuex },
    //可以配置重定向
    { path: '', redirect: "page1" },
    //或者重新写个路径为空的路由
    // { path: "", component: page1 }
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    mode: 'hash', // hash路由
    // base: process.env.BASE_URL,
    //ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router