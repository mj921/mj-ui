<template>
  <div class="mj-datepicker">
    <mj-input />
    <div class="mj-picker--panel">
      <div class="mj-picker--header">
        <i class="mj-icon-more-left"></i>
        <i class="mj-icon-left"></i>
        <i class="mj-icon-right"></i>
        <i class="mj-icon-more-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MjDatePicker"
};
</script>

<style lang="scss" scoped>
.mj-datepicker {
  .mj-datepicker--panel {
  }
}
</style>
