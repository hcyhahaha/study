<template>
  <div>
    <h1>这是父组件</h1>
    <child1></child1>
    <child2></child2>
    <child3></child3>
  </div>
</template>
<script>
import Child1 from "./page4/child1.vue";
import Child2 from "./page4/child2.vue";
import Child3 from "./page4/child3.vue";
export default {
  components: {
    Child1,
    Child2,
    Child3,
  },
  data() {
    return {
      user: [
        { name: "张三", age: 18 },
        { name: "李四", age: 34 },
        { name: "王二小", age: 8 },
      ],
    };
  },
  methods: {
    
  },
};
</script>