// 子组件
<template>
  <div>
    <div>
      <h1>{{ myData.name }}</h1>
      <p>{{ myData.age }}</p>
      <a-button type="primary" @click="showData"> 点击查看 </a-button>&nbsp;
      <a-button type="primary" ghost @click="changeFu"> changeFu </a-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    myData: Object,
  },
  watch: {
    myData(newVal) {
      this.data = newVal;
    },
  },
  data() {
    return {
      data: this.myData,
      visible: false,
      toFuData: {
        msg: "子改父",
        num: 888,
        arr: [
          { name: "张三", age: 12 },
          { name: "李四", age: 18 },
          { name: "王五", age: 42 },
        ],
      },
    };
  },
  created() {},
  methods: {
    showData() {
      console.log("data--->", this.data);
    },
    // 子改父
    changeFu() {
      this.$emit("fuChange", this.toFuData);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
