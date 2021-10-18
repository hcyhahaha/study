<template>
  <div style="margin: 10px">
    <div class="box1">
      <div
        v-for="item in timeData"
        :key="item.value"
        :class="{ changeSty: item.active }"
        @click="add(item)"
      >
        {{ item.label }}
      </div>
    </div>

    <div class="box2">
      <div>已选中：</div>
      <div class="check" v-for="(item, index) in arr" :key="index">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeData: [
        { label: "周一", value: "aaa", active: false },
        { label: "周二", value: "bbb", active: false },
        { label: "周三", value: "ccc", active: false },
        { label: "周四", value: "ddd", active: false },
        { label: "周五", value: "eee", active: false },
        { label: "周六", value: "fff", active: false },
        { label: "周日", value: "ggg", active: false },
      ],
      changeSty: true,
      arr: [],
    };
  },
  methods: {
    add(data) {
      let falg = true; // 无重复的值
      let obj = null; // 要删除的元素
      let arr = this.arr;
      if (arr.length === 0) {
        data.active = true;
        arr.push(data);
        return;
      } else {
        arr.forEach((ele) => {
          if (ele.value === data.value) {
            falg = false; // 有重复的值
            obj = ele; // 要删除的元素
            let index = arr.indexOf(ele);
            arr.splice(index, 1);
          }
        });
      }

      if (falg) {
        data.active = true;
        arr.push(data);
      }

      if (obj) {
        this.timeData.forEach((ele) => {
          if (obj.value === ele.value) {
            ele.active = false;
          }
        });
      }

      this.timeData.forEach((m) => {
        this.arr.forEach((n) => {
          if (m.value === n.value) {
            m.active = true;
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.box1 {
  display: flex;
  & > div {
    padding: 5px 15px;
    margin: 0 5px;
    cursor: pointer;
    transition: all .3s linear;
    border-radius: 5px;
    &:hover {
        background-color: #d87093a4;
        border-radius: 5px;
    }
  }
  .changeSty {
    color: white;
    background-color: palevioletred;
    border-radius: 5px;
  }
}
.box2 {
  display: flex;
  & > div {
    padding: 5px 15px;
    margin: 0 5px;
  }
  .check {
    color: green;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>