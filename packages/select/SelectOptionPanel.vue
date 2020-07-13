<template>
  <transition>
    <div
      v-show="showPopper"
      class="mj-select__option-panel"
      :class="'mj-select__option-panel--' + popperPosition"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import Popper from "../utils/popper";
export default {
  mixins: [Popper]
};
</script>

<style lang="scss" scoped>
.mj-select__option-panel {
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  border: 1px solid $black_borderColor;
  border-radius: 2px;
  padding: 5px 0;
  background-color: $white;
  box-shadow: 0 0 5px 0 $black_borderColor;
  &.mj-select__option-panel--top {
    margin-top: -50px;
    transform: translateY(-100%);
  }
}
</style>
