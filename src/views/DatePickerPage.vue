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
      <div class="doc-demo">
        <div class="doc-demo-block">
          <dt>绑定值：{{ date2 }}</dt>
          <mj-date-picker v-model="date2" format="yyyy年MM月dd日" />
        </div>
        <div class="doc-demo-block">
          <dt>绑定值：{{ date3 }}</dt>
          <mj-date-picker v-model="date3" value-format="yyyy/MM/dd" />
        </div>
      </div>
    </mj-code>
    <mj-code title="日期类型" describe="可以按天、按月、按年选择" :code="code3">
      <div class="doc-demo">
        <div class="doc-demo-block">
          <dt>天</dt>
          <mj-date-picker v-model="date4" />
        </div>
        <div class="doc-demo-block">
          <dt>月</dt>
          <mj-date-picker v-model="date5" type="month" />
        </div>
        <div class="doc-demo-block">
          <dt>年</dt>
          <mj-date-picker v-model="date6" type="year" />
        </div>
      </div>
    </mj-code>
    <div class="mj-page-title2">Datepicker 属性</div>
    <mj-api-table :data="datepickerAttr" />
    <div class="mj-page-title2">Datepicker 事件</div>
    <mj-api-table :data="datepickerEvent" type="event" />
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
      date4: "",
      date5: "",
      date6: "",
      code1: codeJson.code1,
      code2: codeJson.code2,
      code3: codeJson.code3,
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
          defaultVal: "yyyy-MM-dd"
        },
        {
          prop: "type",
          desc: "显示类型",
          type: "string",
          optional: "date | month | year",
          defaultVal: "date"
        }
      ],
      datepickerEvent: [
        {
          event: "change",
          desc: "选中状态发生改变时触发",
          callback: "(当前值，之前的值)"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.doc-demo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  .doc-demo-block {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-direction: column;
    width: 50%;
    align-items: center;
    dt {
      margin-bottom: 16px;
    }
  }
}
</style>
