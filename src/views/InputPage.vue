<template>
  <div>
    <div class="mj-page-title1">Input 输入框</div>
    <mj-code title="基础用法" describe="基础的输入框用法" :code="code1">
      <mj-input v-model="input1" />
      输入框值：{{ input1 }}
    </mj-code>
    <div class="mj-page-title2">Input 属性</div>
    <mj-api-table :data="inputAttr" />
    <div class="mj-page-title2">Input 事件</div>
    <mj-api-table :data="inputEvent" type="event" />
  </div>
</template>
<script>
import codeJson from "@/docCodes/input";

export default {
  name: "InputPage",
  data() {
    return {
      input1: "",
      code1: codeJson.code1,
      inputAttr: [
        {
          prop: "v-model | value",
          desc: "输入框值",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "type",
          desc: "输入框类型, 原生属性",
          type: "string",
          optional: "—",
          defaultVal: "'text'"
        },
        {
          prop: "placeholder",
          desc: "输入框占位文本",
          type: "string",
          optional: "—",
          defaultVal: "—"
        }
      ],
      inputEvent: [
        {
          event: "blur",
          desc: "输入框失去焦点时触发",
          callback: "event"
        },
        {
          event: "focus",
          desc: "输入框获得焦点时触发",
          callback: "event"
        },
        {
          event: "change",
          desc: "输入框值改变时触发",
          callback: "value"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
