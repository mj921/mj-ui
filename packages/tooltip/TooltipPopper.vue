<template>
  <transition name="mj-tooltip-fade">
    <div class="mj-tooltip" v-show="visible">
      {{ content }}
    </div>
  </transition>
</template>

<script>
import Popper from "../utils/popper";
export default {
  name: "MjTooltipPopper",
  mixins: [Popper],
  props: {
    mask: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      animateDelay: 300,
      content: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.mj-tooltip {
  position: absolute;
  background-color: $black;
  border-radius: 4px;
  padding: 10px;
  line-height: 18px;
  font-size: 12px;
  color: $white;
  &.mj-tooltip-fade-enter-active,
  &.mj-tooltip-fade-leave-active {
    transition: all 0.3s;
  }
  &.mj-tooltip-fade-enter,
  &.mj-tooltip-fade-leave-to {
    opacity: 0;
  }
}
</style>
