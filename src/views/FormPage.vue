<template>
  <div class="mj-page">
    <div class="mj-page-title1">Form 表格</div>
    <mj-demo
      v-for="(demo, i) in demoList"
      :key="i"
      :title="demo.title"
      :describe="demo.describe"
      :demo-url="demo.demoUrl"
    >
      <component :is="demo.demoComp"></component>
    </mj-demo>
    <div class="mj-page-title2">Form 属性</div>
    <mj-api-table :data="formAttr" />
    <div class="mj-page-title2">Form 方法</div>
    <mj-api-table :data="formMethod" type="method" />
    <div class="mj-page-title2">FormItem 属性</div>
    <mj-api-table :data="formItemAttr" />
  </div>
</template>
<script>
import FormDemo1 from "../example/form/FormDemo1";
import FormDemo2 from "../example/form/FormDemo2";

export default {
  name: "FormPage",
  components: {
    FormDemo1,
    FormDemo2
  },
  data() {
    return {
      demoList: [
        {
          title: "基础用法",
          describe: "基础的表格用法",
          demoUrl: "form/FormDemo1.vue",
          demoComp: FormDemo1
        },
        {
          title: "表单校验",
          describe: "表单校验 validate",
          demoUrl: "form/FormDemo2.vue",
          demoComp: FormDemo2
        }
      ],
      formAttr: [
        {
          prop: "v-model/value",
          desc: "表单数据对象",
          type: "object",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "label-width",
          desc:
            "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "label-position",
          desc: "表单域标签的位置，需要设置 label-width",
          type: "string",
          optional: "left | right",
          defaultVal: "right"
        },
        {
          prop: "rules",
          desc: "表单验证规则",
          type: "object",
          optional: "—",
          defaultVal: "—"
        }
      ],
      formMethod: [
        {
          method: "validate",
          desc:
            "对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise",
          params: "Function(callback: Function(boolean, object))"
        },
        {
          method: "clearValidate",
          desc: "移除表单项的校验结果。",
          params: "—"
        }
      ],
      formItemAttr: [
        {
          prop: "prop",
          desc:
            "表单域 value 字段，在使用 validate 方法的情况下，该属性是必填的	",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "label",
          desc: "标签文本",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "label-width",
          desc: "表单域标签的宽度，例如 '50px'。支持 auto。",
          type: "string",
          optional: "—",
          defaultVal: "—"
        }
      ]
    };
  },
  methods: {
    fmt(row) {
      return row.width * row.height;
    }
  }
};
</script>
<style lang="scss" scoped></style>
