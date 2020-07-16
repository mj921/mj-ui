<template>
  <transition name="mj-message-box-fade">
    <div class="mj-message-box__wrap" v-show="_visible">
      <div class="mj-message-box">
        <div class="mj-message-box__header">
          <span class="mj-message-box__title">{{ title }}</span>
          <i class="mj-icon-close" @click="closeHandle"></i>
        </div>
        <div class="mj-message-box__body">
          {{ message }}
        </div>
        <div class="mj-message-box__footer">
          <mj-button v-if="showCancelButton" @click="cancelHandle">{{
            cancelButtonText
          }}</mj-button>
          <mj-button type="primary" @click="confirmHandle">{{
            confirmButtonText
          }}</mj-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Popper from "../utils/popper";
import MjButton from "../button";
const NewPopper = {
  ...Popper,
  props: {
    ...Popper.props,
    appendToBody: {
      type: Boolean,
      default: true
    }
  }
};
export default {
  name: "MjMessageBox",
  mixins: [NewPopper],
  components: {
    MjButton
  },
  data() {
    return {
      message: "",
      title: "",
      cancelButtonText: "取消",
      confirmButtonText: "确定",
      onClose: null,
      onCancel: null,
      onConfirm: null,
      showCancelButton: true,
      showConfirmButton: true
    };
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
    show() {
      this._visible = true;
    },
    close() {
      this._visible = false;
      this.$destroy();
    },
    closeHandle() {
      this.close();
      this.onClose();
    },
    cancelHandle() {
      this.close();
      this.onCancel();
    },
    confirmHandle() {
      this.close();
      this.onConfirm();
    }
  }
};
</script>

<style lang="scss" scoped>
.mj-message-box__wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  &.mj-message-box-fade-enter-active,
  &.mj-message-box-fade-leave-active {
    transition: all 0.3s;
  }
  &.mj-message-box-fade-enter,
  &.mj-message-box-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 0;
    vertical-align: middle;
  }
  .mj-message-box {
    display: inline-block;
    width: 420px;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    font-size: 18px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
    .mj-message-box__header {
      padding: 15px 15px 10px;
      height: 24px;
      line-height: 24px;
      position: relative;
      .mj-message-box__title {
        font-size: 18px;
      }
      .mj-icon-close {
        position: absolute;
        right: 20px;
        top: 20px;
        line-height: 1em;
        cursor: pointer;
      }
    }
    .mj-message-box__body {
      padding: 10px 15px;
    }
    .mj-message-box__footer {
      padding: 5px 15px 15px;
      text-align: right;
    }
  }
}
</style>
