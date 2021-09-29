<template>
  <a-config-provider :locale="zh_CN">
    <div id="app">
      <!-- 路由 start -->
      <div>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/page1">Page1</router-link>&nbsp;&nbsp;
        <router-link to="/page2">Page2</router-link>&nbsp;&nbsp;
        <router-link to="/page3">Page3</router-link>&nbsp;&nbsp;
        <router-link to="/page2/edt">Edt</router-link>&nbsp;&nbsp;
        <router-link to="/page2/sports">Sports</router-link>&nbsp;&nbsp;
      </div>
      <div class="appPage_button_styBox button-box">
        <a-button type="primary" @click="toJump('/page1')"> Page1 </a-button>
        <a-button type="primary" @click="toJump('/page2')"> Page2 </a-button>
        <a-button type="primary" @click="toJump('/page3')"> Page3 </a-button>
        <a-button type="primary" @click="toJump('/page4')">
          vue组件通信
        </a-button>
        <a-button type="primary" @click="toJump('/page2/edt')"> Edt </a-button>
        <a-button type="primary" @click="toJump('/page2/sports')">
          Sports
        </a-button>
      </div>
      <div class="study_button_styBox button-box">
        <a-button type="primary" @click="toJump('/vuex')"> vuex </a-button>
        <a-button type="primary" @click="toJump('/vModel')"> v-model </a-button>
        <a-button type="primary"> 按钮 </a-button>
        <a-button type="primary"> 按钮 </a-button>
      </div>
      <!-- 路由出口 -->
      <!-- 路由匹配到的组件将渲染在这里 -->
      <router-view></router-view>
      <!-- 路由 end -->
    </div>
  </a-config-provider>
</template>

<script>
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");
export default {
  name: "App",
  data() {
    return {
      zh_CN,
    };
  },
  methods: {
    toJump(par) {
      const my_router = this.$route.path;
      if (my_router !== par) {
        this.$router.push(par);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.button-box {
  > button {
    margin: 5px 10px 5px 0;
  }
}
</style>
