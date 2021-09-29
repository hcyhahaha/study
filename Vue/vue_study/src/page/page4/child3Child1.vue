<template>
  <div style="height: 100px; border: 1px solid green">
    <h1>{{this.msg}}</h1>
  </div>
</template>
<script>
import { Event } from "../../main.js";
export default {
  created() {
    Event.$on("child3-chi", (data) => {
      this.msg = data;
      console.log(data);
    });
  },
  data() {
    return {
      msg: "我是子组件3的子组件",
    };
  },
};
</script>