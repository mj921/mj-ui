<template>
  <div>
    <div class="mj-page-title1">Radio 单选框</div>
    <mj-code title="基础用法" describe="基础的单选框用法" :code="code1">
      <mj-radio v-model="radio1" label="1">1</mj-radio>
      <mj-radio v-model="radio1" label="2">2</mj-radio>
    </mj-code>
    <div class="mj-page-title2">Radio 属性</div>
    <mj-api-table :data="radioAttr"></mj-api-table>
  </div>
</template>
<script>
import codeJson from "@/docCodes/radio";

export default {
  name: "RadioPage",
  data() {
    return {
      radio1: "",
      code1: codeJson.code1,
      radioAttr: [
        {
          prop: "label",
          desc: "选项值",
          type: "string | number | boolean",
          optional: "—",
          defaultVal: "—"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
