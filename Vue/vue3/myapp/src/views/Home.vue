<template>
  <div id="drag" class="boxouter">
    <!-- 标题行 -->
    <div class="title">
      <div class="tit-left-box">
        <span
          class="icon"
          @mousedown="change('content1')"
          :style="content1Sty"
        ></span>
        <span
          class="icon"
          @mousedown="change('content2')"
          :style="content2Sty"
        ></span>
        <span
          class="icon"
          @mousedown="change('content3')"
          :style="content3Sty"
        ></span>
      </div>
      <div class="tit-right-box">
        <span class="title-text">备忘录</span>
      </div>
    </div>
    <!-- 内容区 -->
    <div class="content-box">
      <a-progress
        v-if="content1"
        type="line"
        :percent="36"
        strokeColor="#fae3d9"
      />
      <a-progress
        v-if="content2"
        type="circle"
        :percent="10"
        strokeColor="#bbded6"
      />
      <a-progress
        v-if="content3"
        type="dashboard"
        :percent="87"
        strokeColor="#8ac6d1"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "../tool/move.js";
export default {
  components: {},
  data() {
    return {
      content1: true,
      content2: false,
      content3: false,
      content1Sty: {
        backgroundColor: "#fae3d9",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 3px 6px -1px inset, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px inset",
      },
      content2Sty: {
        backgroundColor: "#bbded6",
        boxShadow: "",
      },
      content3Sty: {
        backgroundColor: "#8ac6d1",
        boxShadow: "",
      },
    };
  },
  methods: {
    change(msg) {
      if (msg === "content1") {
        this.content1 = true;
        this.content2 = false;
        this.content1 = false;
        this.content1Sty.boxShadow =
          "rgba(50, 50, 93, 0.25) 0px 3px 6px -1px inset, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px inset";
        this.content2Sty.boxShadow = "";
        this.content3Sty.boxShadow = "";
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.boxouter {
  width: 350px;
  height: 250px;
  background-color: #ffb6b9;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.3),
    0px 0px 20px rgba(0, 0, 0, 0.1) inset;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  position: absolute;
  top: 100px;
  left: 100px;
  // 标题行
  .title {
    height: 40px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 2px solid #fcf9f9c0;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #c6a6ac7d;
    .tit-left-box {
      display: flex;
      justify-content: flex-start;
    }
    .title-text {
      font-size: 18px;
      font-family: "宋体";
      color: white;
    }
    .icon {
      display: inline-block;
      width: 20px;
      height: 20px;
      background-color: red;
      border-radius: 50%;
      margin-right: 5px;
    }
  }
  // 内容区
  .content-box {
    height: 210px;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 阴影样式
.boxouter::before,
.boxouter::after {
  content: "";
  position: absolute;
  z-index: -1;
  bottom: 15px;
  left: 10px;
  width: 50%;
  height: 20%;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  transform: rotate(-3deg);
}

.boxouter::after {
  right: 10px;
  left: auto;
  transform: rotate(3deg);
}
</style>

