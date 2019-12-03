<template>
  <div>
    <div class="mj-page-title1">Checkbox 多选框</div>
    <mj-code title="基础用法" describe="基础的单选框用法" :code="code1">
      <mj-checkbox v-model="checked1" label="1">1</mj-checkbox>
      <mj-checkbox v-model="checked2" label="2">2</mj-checkbox>
    </mj-code>
    <div class="mj-page-title2">Checkbox 属性</div>
    <mj-api-table :data="checkboxAttr" />
    <div class="mj-page-title2">Checkbox 事件</div>
    <mj-api-table :data="checkboxEvent" />
  </div>
</template>
<script>
import codeJson from "@/docCodes/checkbox";

export default {
  name: "ChackboxPage",
  data() {
    return {
      checked1: false,
      checked2: false,
      code1: codeJson.code1,
      checkboxAttr: [
        {
          prop: "checked",
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
        }
      ],
      checkboxEvent: [
        {
          event: "change",
          desc: "选中状态发生改变时触发",
          callback: "当前是否选中"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
