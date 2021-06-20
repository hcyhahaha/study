<template>
  <div>
    <h1>Page1</h1>
    <parent-pomponent :myData="obj" @fuChange="changeParent" />
    <a-button @click="changeObj" style="margin: 10px 0">changeZi</a-button>
    <div v-for="(item, index) in data" :key="index">
      <h2>{{ item.name }}&nbsp;{{ item.age }}</h2>
    </div>
  </div>
</template>
<script>
import ParentPomponent from "../components/HelloWorld.vue";

export default {
  components: {
    ParentPomponent,
  },
  data() {
    return {
      data: [],
      obj: {
        name: "张三",
        age: 18,
      },
    };
  },
  methods: {
    changeObj() {
      this.obj = {
        name: "zhang san",
        age: 24,
        sex: "男",
      };
    },
    // 子组件修改父组件的值
    changeParent(data) {
      this.data = data.arr;
      console.log("子组件修改父组件的值--->", data);
    },
  },
};
</script>
