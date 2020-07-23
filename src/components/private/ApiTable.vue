<template>
  <div>
    <mj-table
      :data="data"
      :columns="columns1"
      v-if="type === 'attr'"
    ></mj-table>
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
          width: 200
        },
        {
          prop: "callback",
          label: "回调函数",
          width: 200
        }
      ]
    };
  }
};
</script>
