<template>
  <div>
    <mj-color-selector v-model="color1" @change="change" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "#333333"
    };
  },
  methods: {
    change(color) {
      console.log(`颜色变成了${color}`);
    }
  }
};
</script>

<style></style>
