<template>
  <div>
    <div class="mj-page-title1">Datepicker 日期选择器</div>
    <mj-code title="基础用法" describe="基础的日期选择器用法" :code="code1">
      <mj-date-picker v-model="date1" />
    </mj-code>
    <div class="mj-page-title2">Datepicker 属性</div>
    <mj-api-table :data="datepickerAttr"></mj-api-table>
  </div>
</template>
<script>
import codeJson from "@/docCodes/datepicker";

export default {
  name: "DatepickerPage",
  data() {
    return {
      date1: "",
      code1: codeJson.code1,
      datepickerAttr: [
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
