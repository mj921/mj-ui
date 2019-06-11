<template>
  <div>
    <mj-table :data="data" v-if="type === 'attr'">
      <mj-table-column prop="prop" label="参数" width="100px"></mj-table-column>
      <mj-table-column prop="desc" label="说明" width="200px"></mj-table-column>
      <mj-table-column prop="type" label="类型" width="100px"></mj-table-column>
      <mj-table-column
        prop="optional"
        label="可选值"
        width="200px"
      ></mj-table-column>
      <mj-table-column
        prop="defaultVal"
        label="默认值"
        width="100px"
      ></mj-table-column>
    </mj-table>
    <mj-table :data="data" v-else-if="type === 'event'">
      <mj-table-column
        prop="event"
        label="事件"
        width="100px"
      ></mj-table-column>
      <mj-table-column prop="desc" label="说明" width="200px"></mj-table-column>
      <mj-table-column
        prop="callback"
        label="回调参数"
        width="200px"
      ></mj-table-column>
    </mj-table>
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
  }
};
</script>
