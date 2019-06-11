<template>
  <div
    class="mj-menu-item"
    :class="{ 'mj-menu-item__actived': actived }"
    @click="_handleClick"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MjMenuItem",
  data() {
    return {
      actived: false
    };
  },
  props: {
    index: String
  },
  inject: ["rootMenu", "setActived"],
  methods: {
    _handleClick() {
      this.setActived(this.index);
      this.$emit("click");
    },
    _setActived(flag) {
      this.actived = flag;
    }
  },
  computed: {
    parentMenu() {
      let parent = this.$parent;
      while (
        parent &&
        ["MjMenu", "MjSubMenu"].indexOf(parent.$options.name) === -1
      ) {
        parent = parent.$parent;
      }
      return parent;
    }
  },
  mounted() {
    this.rootMenu && this.rootMenu.addItem(this);
    this.parentMenu && this.parentMenu.addItem(this);
  }
};
</script>
<style lang="scss">
.mj-menu-item {
  padding-left: 20px;
  &:hover {
    color: $blue;
  }
  &.mj-menu-item__actived {
    color: $blue;
  }
}
</style>
