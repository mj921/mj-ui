<template>
  <div class="mj-menu-item-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MjMenuItemGroup",
  props: {
    title: String
  }
};
</script>
<style lang="scss"></style>
