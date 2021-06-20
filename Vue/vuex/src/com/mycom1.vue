<template>
  <div>
    <h1>儿子组件</h1>
    <h2>{{ this.$store.state.msg }}</h2>
    <button @click="changeFu">儿子组件修改父组件</button>
    <button @click="mutationsChange">mutations修改仓库数据</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 100,
      name: "小张",
    };
  },
  methods: {
    changeFu() {
      this.$store.state.msg = "儿子修改父组件";
    },
    mutationsChange() {
      // commit触发修改store仓库中的数据
      this.$store.commit("fn1", this.name);
    },
  },
};
</script>