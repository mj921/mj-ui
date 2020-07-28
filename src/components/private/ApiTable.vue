<template>
  <div>
    <mj-table :data="data" :columns="columns" v-if="show"></mj-table>
  </div>
</template>
<script>
export default {
  name: "MjApiTable",
  props: {
    type: {
      type: String,
      default: "attr"
    },
    data: Array
  },
  computed: {
    columns() {
      switch (this.type) {
        case "attr":
          return this.columns1;
        case "event":
          return this.columns2;
        case "method":
          return this.columns3;
        default:
          return [];
      }
    },
    show() {
      return ["attr", "event", "method"].indexOf(this.type) > -1;
    }
  },
  data() {
    return {
      columns1: [
        {
          prop: "prop",
          label: "参数",
          width: 100
        },
        {
          prop: "desc",
          label: "说明",
          minWidth: 200
        },
        {
          prop: "type",
          label: "类型",
          width: 100
        },
        {
          prop: "optional",
          label: "可选值",
          width: 200
        },
        {
          prop: "defaultVal",
          label: "默认值",
          width: 100
        }
      ],
      columns2: [
        {
          prop: "event",
          label: "事件",
          width: 100
        },
        {
          prop: "desc",
          label: "说明",
          minWidth: 200
        },
        {
          prop: "callback",
          label: "回调参数",
          width: 200
        }
      ],
      columns3: [
        {
          prop: "method",
          label: "方法",
          width: 100
        },
        {
          prop: "desc",
          label: "说明",
          minWidth: 200
        },
        {
          prop: "params",
          label: "回调参数",
          width: 300
        }
      ]
    };
  }
};
</script>
