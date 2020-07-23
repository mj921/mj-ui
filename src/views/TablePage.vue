<template>
  <div class="mj-page">
    <div class="mj-page-title1">Table 表格</div>
    <mj-demo
      title="基础用法"
      describe="基础的表格用法"
      demo-url="table/TableDemo1.vue"
    >
      <table-demo1 />
    </mj-demo>
    <mj-demo
      title="自定义列内容"
      describe="formatter自定义格式化方法"
      demo-url="table/TableDemo2.vue"
    >
      <table-demo2 />
    </mj-demo>
    <mj-demo
      title="列表为空"
      describe="列表为空时列表展示"
      demo-url="table/TableDemo3.vue"
    >
      <table-demo3 />
    </mj-demo>
    <mj-demo
      title="slot插槽"
      describe="插槽名称默认prop 可以通过slotName设置"
      demo-url="table/TableDemo4.vue"
    >
      <table-demo4 />
    </mj-demo>
    <div class="mj-page-title2">Table 属性</div>
    <mj-api-table :data="tableAttr" />
    <div class="mj-page-title2">TableColumn 属性</div>
    <mj-api-table :data="tableColumnAttr" />
  </div>
</template>
<script>
import TableDemo1 from "../example/table/TableDemo1";
import TableDemo2 from "../example/table/TableDemo2";
import TableDemo3 from "../example/table/TableDemo3";
import TableDemo4 from "../example/table/TableDemo4";

export default {
  name: "TablePage",
  components: {
    TableDemo1,
    TableDemo2,
    TableDemo3,
    TableDemo4
  },
  data() {
    return {
      tableAttr: [
        {
          prop: "data",
          desc: "表格数据",
          type: "object[]",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "empty-text",
          desc: "数据为空时显示的文字",
          type: "string",
          optional: "—",
          defaultVal: "暂无数据"
        }
      ],
      tableColumnAttr: [
        {
          prop: "prop",
          desc: "列属性名",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "label",
          desc: "列名",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "width",
          desc: "列宽度",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "min-width",
          desc: "列最小宽度",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "formatter",
          desc:
            "自定义格式化方法(row 这一行的数据 index 这一行的索引， 返回字符串)",
          type: "(row, index) => string",
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
