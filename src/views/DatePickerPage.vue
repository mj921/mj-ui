<template>
  <div>
    <div class="mj-page-title1">Datepicker 日期选择器</div>
    <mj-code title="基础用法" describe="基础的日期选择器用法" :code="code1">
      <mj-date-picker v-model="date1" />
    </mj-code>
    <mj-code
      title="日期格式"
      describe="使用format指定输入框的格式；使用value-format指定绑定值的格式。"
      :code="code2"
    >
      绑定值：{{ date2 }}
      <mj-date-picker v-model="date2" format="yyyy年MM月dd日" />
      绑定值：{{ date3 }}
      <mj-date-picker v-model="date3" value-format="yyyy/MM/dd" />
    </mj-code>
    <div class="mj-page-title2">Datepicker 属性</div>
    <mj-api-table :data="datepickerAttr" />
  </div>
</template>
<script>
import codeJson from "@/docCodes/datepicker";

export default {
  name: "DatepickerPage",
  data() {
    return {
      date1: "",
      date2: "",
      date3: "",
      code1: codeJson.code1,
      code2: codeJson.code2,
      datepickerAttr: [
        {
          prop: "v-model/value",
          desc: "选择框值",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "value-format",
          desc: "绑定值格式",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "format",
          desc: "显示在输入框中的格式",
          type: "string",
          optional: "—",
          defaultVal: "'yyyy-MM-dd'"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
