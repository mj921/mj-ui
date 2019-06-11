<template>
  <div class="mj-menu">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "MjMenu",
  data() {
    return {
      items: {},
      actived: ""
    };
  },
  provide() {
    return {
      rootMenu: this,
      rootActived: this.actived,
      setActived: actived => {
        if (this.actived) {
          this.items[this.actived]._setActived(false);
        }
        this.actived = actived;
        if (actived) {
          this.items[actived]._setActived(true);
        }
      }
    };
  },
  props: {
    defaultActived: String
  },
  methods: {
    addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem(item) {
      delete this.items[item.index];
    }
  },
  mounted() {
    if (this.actived) {
      this.items[this.actived]._setActived(true);
    }
  },
  created() {
    this.actived = this.defaultActived;
  }
};
</script>
<style lang="scss"></style>
