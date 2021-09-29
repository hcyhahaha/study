<template>
  <div class="child2Box">
    <h1>{{ this.msg }}</h1>
  </div>
</template>
<script>
import { Event } from "../../main.js";
export default {
  data() {
    return {
      msg: "子组件2",
    };
  },
  created() {
    Event.$on("childFn", (data) => {
      this.msg = data;
      console.log(data);
    });
  },
  methods: {
    childFnxx(msg) {
      this.msg = msg;
      console.log(msg);
    },
  },
};
</script>
<style lang="less" scoped>
.child2Box {
  border: 1px solid red;
  height: 200px;
}
</style>