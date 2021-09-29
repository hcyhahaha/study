<template>
  <div class="child3Box">
    <h1>子组件3</h1>
    <child3-child1></child3-child1>
  </div>
</template>
<script>
import Child3Child1 from "./child3Child1.vue";
export default {
  components: {
    Child3Child1,
  },
};
</script>
<style lang="less" scoped>
.child3Box {
  border: 1px solid red;
  height: 200px;
}
</style>