<template>
  <div>
    <h1>Page3</h1>
    <div class="page3BoxSty">
      <div class="left">左边</div>
      <a-form :form="form" @submit="handleSubmit" class="dynamic_form_item_sty">
        <a-form-item
          v-for="(k, index) in form.getFieldValue('keys')"
          :key="k"
          v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
          :label="index === 0 ? '主料' : ''"
          :required="false"
        >
          <a-input
            v-decorator="[
              `names[${k}]`,
              {
                validateTrigger: ['change', 'blur'],
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: '请输入内容！',
                  },
                ],
              },
            ]"
            placeholder="猪肉、羊肉"
            style="width: 60%; margin-right: 8px"
          />
          <a-icon
            v-if="form.getFieldValue('keys').length > 1"
            class="dynamic-delete-button"
            type="minus-circle-o"
            :disabled="form.getFieldValue('keys').length === 1"
            @click="() => remove(k)"
          />
        </a-form-item>
        <a-form-item v-bind="formItemLayoutWithOutLabel">
          <a-button type="dashed" style="width: 60%" @click="add">
            <a-icon type="plus" /> 添加
          </a-button>
        </a-form-item>
        <a-form-item v-bind="formItemLayoutWithOutLabel">
          <a-button type="primary" html-type="submit"> 提交 </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
let id = 0;
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 2 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 8, offset: 2 },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "dynamic_form_item" });
    this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
  },
  methods: {
    remove(k) {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter((key) => key !== k),
      });
    },

    add() {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      const nextKeys = keys.concat(id++);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys,
      });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          const { keys, names } = values;
          console.log("Received values of form: ", values);
          console.log(
            "Merged values:",
            keys.map((key) => names[key])
          );
        }
      });
    },
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
/* ************自定义样式************* */
.page3BoxSty {
  border: 1px #0970b4 solid;
  display: flex;
}
.page3BoxSty .left {
  text-align: center;
  color: #09b442;
  /* border: 1px #09b442 solid; */
  width: 50%;
}
.dynamic_form_item_sty {
  width: 50%;
  /* border: 1px sienna solid; */
  border-left: 1px #0970b4 solid;
}
</style>