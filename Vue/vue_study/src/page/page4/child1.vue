<template>
  <div class="child1Box">
    <h1>子组件1</h1>
    <button @click="changeChild2">点我改变 子组件2的值</button>
    <button @click="changeChild3Chi">点我改变 子组件3的子组件</button>
  </div>
</template>
<script>
import { Event } from "../../main.js";
export default {
  data() {
    return {};
  },
  methods: {
    changeChild2() {
      Event.$emit("childFn", "子组件1的数据");
    },
    changeChild3Chi() {
      Event.$emit("child3-chi", "我是子组件1里的内容，我要改变子组件3的子组件");
    },
  },
};
</script>
<style lang="less" scoped>
.child1Box {
  border: 1px solid red;
  height: 200px;
}
</style>