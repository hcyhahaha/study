<template>
  <div style="background: #ececec; padding: 30px">
    <a-card title="vuex" :bordered="false">
      <div class="fu-box" style="color: red">
        <h1 class="mycolor">我是父组件</h1>
        <h2 class="mycolor">{{ this.$store.state.msg }}</h2>
        <h2 class="mycolor">{{ this.$store.state.num }}</h2>
      </div>
      <mychild />
    </a-card>
  </div>
</template>
<script>
import mychild from "./mychild.vue";

export default {
  components: {
    mychild,
  },
  data() {
    return {
      property: "value",
    };
  },
};
</script>

<style lang="less" scoped>
.fu-box {
  .mycolor {
    color: inherit;
  }
}
</style>