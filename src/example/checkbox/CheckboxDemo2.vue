<template>
  <div>
    {{ checked }}
    <mj-checkbox-group v-model="checked">
      <mj-checkbox label="1">1</mj-checkbox>
      <mj-checkbox label="2">2</mj-checkbox>
    </mj-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: ["1"]
    };
  }
};
</script>

<style></style>
