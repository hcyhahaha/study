<template>
  <div class="zi-box" style="color: green">
    <h1 class="mycolor">我是儿子组件</h1>
    <h2 class="mycolor">{{ this.$store.state.msg }}</h2>
    <h2 class="mycolor">{{ this.$store.getters.fn1 }}</h2>
    <a-button
      type="primary"
      style="background-color: green"
      @click="directAssignment"
    >
      直接赋值修改仓库 </a-button
    >&nbsp;
    <a-button
      type="primary"
      style="background-color: green"
      @click="mutationsModify"
    >
      mutations同步修改仓库
    </a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: "张三",
        age: 18,
      },
    };
  },
  methods: {
    // 通过直接赋值修改仓库的值
    directAssignment() {
      this.$store.state.msg = "直接赋值修改仓库";
      this.$store.state.num = 999;
    },

    // 通过mutations修改仓库的值
    // commit触发修改store仓库中的数据
    mutationsModify() {
      this.$store.commit("fn1", this.obj);
    },
  },
};
</script>

<style lang="less" scoped>
.zi-box {
  .mycolor {
    color: inherit;
  }
}
</style>