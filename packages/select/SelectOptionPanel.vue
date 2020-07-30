<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="mj-select__option-panel"
      :style="{
        height:
          optionNum >= 5 || optionNum === 0 ? '170px' : optionNum * 34 + 'px',
        width: reference && reference.clientWidth + 'px'
      }"
    >
      <mj-scroll-view ref="scroll">
        <slot></slot>
      </mj-scroll-view>
    </div>
  </transition>
</template>

<script>
import Popper from "../utils/popper";
import MjScrollView from "../scrollView";
const NewPopper = {
  ...Popper,
  props: {
    ...Popper.props,
    mask: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    }
  }
};
export default {
  mixins: [NewPopper],
  components: {
    MjScrollView
  },
  props: {
    optionNum: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
.mj-select__option-panel {
  position: absolute;
  top: 45px;
  left: 0;
  height: 170px;
  border: 1px solid $black_borderColor;
  border-radius: 2px;
  padding: 5px 0;
  background-color: $white;
  box-shadow: 0 0 5px 0 $black_borderColor;
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.5s ease;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
}
</style>
