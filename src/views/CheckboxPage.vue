<template>
  <div>
    <div class="mj-page-title1">Checkbox 多选框</div>
    <mj-demo
      v-for="(demo, i) in demoList"
      :key="i"
      :title="demo.title"
      :describe="demo.describe"
      :demo-url="demo.demoUrl"
    >
      <component :is="demo.demoComp"></component>
    </mj-demo>
    <div class="mj-page-title2">Checkbox 属性</div>
    <mj-api-table :data="checkboxAttr" />
    <div class="mj-page-title2">Checkbox 事件</div>
    <mj-api-table :data="checkboxEvent" type="event" />
    <div class="mj-page-title2">CheckboxGroup 属性</div>
    <mj-api-table :data="checkboxGroupAttr" />
  </div>
</template>
<script>
import CheckboxDemo1 from "../example/checkbox/CheckboxDemo1";
import CheckboxDemo2 from "../example/checkbox/CheckboxDemo2";

export default {
  name: "ChackboxPage",
  components: {
    CheckboxDemo1,
    CheckboxDemo2
  },
  data() {
    return {
      demoList: [
        {
          title: "基础用法",
          describe: "基础的多选框用法",
          demoUrl: "checkbox/CheckboxDemo1.vue",
          demoComp: CheckboxDemo1
        },
        {
          title: "多选框组",
          describe: "多选框组",
          demoUrl: "checkbox/CheckboxDemo2.vue",
          demoComp: CheckboxDemo2
        }
      ],
      checkboxAttr: [
        {
          prop: "v-model/checked",
          desc: "是否选中",
          type: "string | number | boolean",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "disabled",
          desc: "是否禁用",
          type: "boolean",
          optional: "—",
          defaultVal: "false"
        },
        {
          prop: "label",
          desc: "选中状态的值（只有在checkbox-group时有效）",
          type: "string / number / boolean",
          optional: "—",
          defaultVal: "—"
        }
      ],
      checkboxEvent: [
        {
          event: "change",
          desc: "选中状态发生改变时触发",
          callback: "当前是否选中"
        }
      ],
      checkboxGroupAttr: [
        {
          prop: "v-model/value",
          desc: "选中值",
          type: "array",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "disabled",
          desc: "是否禁用",
          type: "boolean",
          optional: "—",
          defaultVal: "false"
        },
        {
          prop: "label",
          desc: "选中状态的值（只有在checkbox-group时有效）",
          type: "string / number / boolean",
          optional: "—",
          defaultVal: "—"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
