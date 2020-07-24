<template>
  <div class="mj-page">
    <div class="mj-page-title1">Table 表格</div>
    <mj-demo
      v-for="(demo, i) in demoList"
      :key="i"
      :title="demo.title"
      :describe="demo.describe"
      :demo-url="demo.demoUrl"
    >
      <component :is="demo.demoComp"></component>
    </mj-demo>
    <div class="mj-page-title2">Table 属性</div>
    <mj-api-table :data="tableAttr" />
    <div class="mj-page-title2">columns 属性</div>
    <mj-api-table :data="tableColumnAttr" />
  </div>
</template>
<script>
import TableDemo1 from "../example/table/TableDemo1";
import TableDemo2 from "../example/table/TableDemo2";
import TableDemo3 from "../example/table/TableDemo3";
import TableDemo4 from "../example/table/TableDemo4";
import TableDemo5 from "../example/table/TableDemo5";
import TableDemo6 from "../example/table/TableDemo6";

export default {
  name: "TablePage",
  components: {
    TableDemo1,
    TableDemo2,
    TableDemo3,
    TableDemo4,
    TableDemo5,
    TableDemo6
  },
  data() {
    return {
      demoList: [
        {
          title: "基础用法",
          describe: "基础的表格用法",
          demoUrl: "table/TableDemo1.vue",
          demoComp: TableDemo1
        },
        {
          title: "自定义列内容",
          describe: "formatter自定义格式化方法",
          demoUrl: "table/TableDemo2.vue",
          demoComp: TableDemo2
        },
        {
          title: "列表为空",
          describe: "列表为空时列表展示",
          demoUrl: "table/TableDemo3.vue",
          demoComp: TableDemo3
        },
        {
          title: "slot插槽",
          describe:
            "列中使用时 type设为'slot',插槽名称为prop,可以通过slotName设置；设置表头时，slotHeader设为true。插槽名称为porp + 'Header'",
          demoUrl: "table/TableDemo4.vue",
          demoComp: TableDemo4
        },
        {
          title: "固定列",
          describe: "column 设置 fixed 为 left 或 right 固定列",
          demoUrl: "table/TableDemo5.vue",
          demoComp: TableDemo5
        },
        {
          title: "表头固定",
          describe: "设置height后就可以固定表头",
          demoUrl: "table/TableDemo6.vue",
          demoComp: TableDemo6
        }
      ],
      tableAttr: [
        {
          prop: "data",
          desc: "表格数据",
          type: "object[]",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "columns",
          desc: "表格列，具体参数看下方 columns 属性",
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
          type: "string|number",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "min-width",
          desc: "列最小宽度",
          type: "string|number",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "type",
          desc: "列类型",
          type: "string",
          optional: "slot",
          defaultVal: "—"
        },
        {
          prop: "slotHeader",
          desc: "表头是否用slot",
          type: "boolean",
          optional: "—",
          defaultVal: "false"
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
