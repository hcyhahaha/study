<template>
  <div>
    <h1>Page2</h1>
    <div style="background: #ececec; padding: 30px">
      <a-card title="居中" :bordered="false">
        <div class="box1">
          <div class="box2">
            <span>box2</span>
          </div>
          <div class="box3">
            <span>box3</span>
          </div>
          <div class="box4"></div>
        </div>
      </a-card>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {},
};
</script>
<style lang="less" scoped>
.box1 {
  border: 1px solid red;
  height: 300px;
  display: flex;
  justify-content: flex-start;
  >div {
    margin: 5px;
  }
  .box2 {
    width: 100px;
    height: 100px;
    line-height: 100px;
    color: yellowgreen;
    border: 1px solid yellowgreen;
    text-align: center;
  }
  .box3 {
    width: 200px;
    height: 150px;
    border: 1px solid pink;
    color: pink;
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      width: 100px;
      height: 60px;
      display: block;
      border: 1px solid pink;
      margin: 0 auto;
      text-align: center;
      line-height: 60px;
    }
  }
  .box4 {
    width: 0;
    height: 0;
    border: 100px solid;
    border-color: #52a5a1 transparent transparent transparent;
  }
}
</style>
