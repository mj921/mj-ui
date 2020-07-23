<template>
  <div>
    <mj-table :data="data" :columns="columns">
      <template v-slot:area="{ row }">
        {{ row.height * row.width }}
      </template>
    </mj-table>
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
          type: "slot"
        }
      ],
      data: [
        {
          width: 100,
          height: 200
        }
      ]
    };
  }
};
</script>

<style></style>
