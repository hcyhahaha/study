<template>
  <div>
    <h1>{{ this.$store.getters.fn1 }}</h1>
    <h1>{{ this.$store.state.msg }}</h1>
    <mycom1></mycom1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  components: {
    mycom1: () => import("@/com/mycom1.vue"),
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    console.log("this.$store=>", this.$store.state);
  },
};
</script>

<style scoped>
</style>
