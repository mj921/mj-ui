<template>
  <transition name="mj-message-fade">
    <div
      v-show="visible"
      class="mj-message"
      :class="['mj-message--' + type]"
      :style="{
        top: topOffset + 'px'
      }"
    >
      {{ message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "MjMessage",
  data() {
    return {
      type: "info",
      message: "",
      visible: false,
      duration: 3000,
      sto: null,
      onClose: null,
      topOffset: 20
    };
  },
  methods: {
    show() {
      this.visible = true;
      document.body.appendChild(this.$el);
      if (this.duration && typeof this.duration === "number") {
        this.sto = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    close() {
      clearTimeout(this.sto);
      this.sto = null;
      this.visible = false;
      document.body.removeChild(this.$el);
      if (this.onClose && typeof this.onClose === "function") {
        this.onClose(this);
      }
      this.$destroy();
    }
  }
};
</script>

<style lang="scss" scoped>
.mj-message {
  &.mj-message-fade-enter,
  &.mj-message-fade-leave-to {
    transform: translate(-50%, -50px);
  }
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  transition: all 0.3s;
  padding: 16px 20px;
  width: 375px;
  line-height: 20px;
  font-size: 14px;
  &.mj-message--info {
    background-color: #edf2fc;
    border: 1px solid #ebeef5;
    color: #909399;
  }
  &.mj-message--warning {
    background-color: #fdf6ec;
    border: 1px solid #faecd8;
    color: #e6a23c;
  }
  &.mj-message--success {
    background-color: #f0f9eb;
    border: 1px solid #e1f3d8;
    color: #67c23a;
  }
  &.mj-message--error {
    background-color: #fef0f0;
    border: 1px solid #fde2e2;
    color: #f56c6c;
  }
}
</style>
