<template>
  <div>
    <mj-table :data="data" :columns="columns" height="500px">
      <template v-slot:heightHeader="{ column }">
        <span style="color: red;">{{ column.label }}</span>
      </template>
      <template v-slot:area="{ row }">
        {{ row.height * row.width }}平方米
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
          label: "宽",
          width: 200
        },
        {
          prop: "height",
          label: "高",
          width: 200
        },
        {
          prop: "color",
          label: "颜色",
          width: 200
        },
        {
          prop: "address",
          label: "地址",
          width: 200
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
          height: 200,
          color: "红色",
          address: "浙江省杭州市余杭区崇贤街道"
        },
        {
          width: 100,
          height: 200,
          color: "红色",
          address: "浙江省杭州市余杭区崇贤街道"
        },
        {
          width: 100,
          height: 200,
          color: "红色",
          address: "浙江省杭州市余杭区崇贤街道"
        },
        {
          width: 100,
          height: 200,
          color: "红色",
          address: "浙江省杭州市余杭区崇贤街道"
        },
        {
          width: 100,
          height: 200,
          color: "红色",
          address: "浙江省杭州市余杭区崇贤街道"
        },
        {
          width: 100,
          height: 200,
          color: "红色",
          address: "浙江省杭州市余杭区崇贤街道"
        },
        {
          width: 100,
          height: 200,
          color: "红色",
          address: "浙江省杭州市余杭区崇贤街道"
        },
        {
          width: 100,
          height: 200,
          color: "红色",
          address: "浙江省杭州市余杭区崇贤街道"
        }
      ]
    };
  }
};
</script>

<style></style>
