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
          prop: "width",
          label: "宽"
        },
        {
          prop: "height",
          label: "高"
        },
        {
          prop: "area",
          label: "面积",
          formatter: function(row) {
            return row.width * row.height;
          }
        }
      ],
      data: []
    };
  }
};
</script>

<style></style>
