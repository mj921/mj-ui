<template>
  <transition name="dialog-fade">
    <div class="mj-dialog__wrap" v-show="_visible">
      <div
        class="mj-dialog"
        :style="{
          width: size
        }"
      >
        <div class="mj-dialog__header">
          <span class="mj-dialog__title">{{ title }}</span>
          <i class="mj-icon-close" @click="close"></i>
        </div>
        <div class="mj-dialog__body">
          <slot></slot>
        </div>
        <div class="mj-dialog__footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popper from "../utils/popper";
export default {
  name: "MjDialog",
  mixins: [Popper],
  props: {
    size: {
      type: String,
      default: "30%"
    },
    title: String
  },
  computed: {
    _visible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit("update:visible", val);
      }
    }
  },
  methods: {
    close() {
      this._visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.mj-dialog__wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.dialog-fade-enter-active,
  &.dialog-fade-leave-active {
    transition: all 0.3;
  }
  &.dialog-fade-enter,
  &.dialog-fade-leave-to {
    transform: translateY(-20px);
  }
  .mj-dialog {
    margin: 15vh auto 50px;
    background-color: #fff;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    .mj-dialog__header {
      padding: 16px 20px;
      height: 24px;
      line-height: 24px;
      position: relative;
      .mj-dialog__title {
        font-size: 16px;
      }
      .mj-icon-close {
        position: absolute;
        right: 20px;
        top: 20px;
        line-height: 1em;
        cursor: pointer;
      }
    }
    .mj-dialog__body {
      padding: 20px;
    }
    .mj-dialog__footer {
      padding: 16px 20px;
      text-align: right;
    }
  }
}
</style>
