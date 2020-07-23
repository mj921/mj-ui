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
          label: "面积"
        }
      ],
      data: [
        {
          width: 100,
          height: 200,
          area: 20000
        }
      ]
    };
  }
};
</script>

<style></style>
