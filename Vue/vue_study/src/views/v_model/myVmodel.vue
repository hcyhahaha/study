<template>
  <div id="my_v_model" style="background: #ececec; padding: 30px">
    <a-card title="v-model" :bordered="false">
      <h1>vueJs的双向数据绑定 核心通过Object.defineProperty()</h1>
      <h1>详情查看当前目录的Object.defineProperty_demo.html文件</h1>
    </a-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      property: "value",
    };
  },
};
</script>

<style lang="less" scoped>
</style>