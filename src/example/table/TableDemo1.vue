<template>
  <div>
    <mj-table :data="data" :columns="columns" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          prop: "prop",
          label: "参数",
          width: 100
        },
        {
          prop: "desc",
          label: "说明",
          width: 200
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
      data: [
        {
          prop: "type",
          desc: "按钮类型",
          type: "string",
          optional: "primary | danger | warning | text",
          defaultVal: "—"
        },
        {
          prop: "size",
          desc: "按钮大小",
          type: "string",
          optional: "medium | small | mini",
          defaultVal: "—"
        },
        {
          prop: "disabled",
          desc: "是否禁用",
          type: "string | boolean",
          optional: "—",
          defaultVal: "false"
        }
      ]
    };
  }
};
</script>

<style></style>
