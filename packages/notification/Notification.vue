<template>
  <transition name="mj-notification-fade">
    <div
      v-show="visible"
      class="mj-notification"
      :class="['mj-notification--' + position]"
      :style="{
        [positionMap[position]]: topOffset + 'px'
      }"
      @click="clickHandle"
    >
      <div class="mj-notification__header">
        <span class="mj-notification__title">{{ title }}</span>
        <i class="mj-icon-close" @click.stop="closeHandle"></i>
      </div>
      <div class="mj-notification__body">{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "MjNotification",
  data() {
    return {
      position: "top-right",
      title: "",
      message: "",
      visible: false,
      duration: 3000,
      sto: null,
      onCloseHandle: null,
      onClose: null,
      onClick: null,
      topOffset: 20,
      positionMap: {
        "top-right": "top",
        "bottom-right": "bottom",
        "top-left": "top",
        "bottom-left": "bottom"
      }
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
    closeHandle() {
      this.close(() => {
        if (this.onClose && typeof this.onClose === "function") {
          this.onClose(this);
        }
      });
    },
    close(callback) {
      clearTimeout(this.sto);
      this.sto = null;
      this.visible = false;
      document.body.removeChild(this.$el);
      callback && callback();
      if (this.onCloseHandle && typeof this.onCloseHandle === "function") {
        this.onCloseHandle(this);
      }
      setTimeout(() => {
        this.$destroy();
      }, 300);
    },
    clickHandle() {
      this.close(() => {
        if (this.onClick && typeof this.onClick === "function") {
          this.onClick(this);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mj-notification {
  position: fixed;
  transition: all 0.3s;
  padding: 16px 20px;
  width: 330px;
  line-height: 20px;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  &.mj-notification--top-right,
  &.mj-notification--bottom-right {
    right: 20px;
    &.mj-notification-fade-enter {
      transform: translateX(100%);
    }
    &.mj-notification-fade-leave-to {
      opacity: 0;
    }
  }
  &.mj-notification--top-left,
  &.mj-notification--bottom-left {
    left: 20px;
    &.mj-notification-fade-enter {
      transform: translateX(-100%);
    }
    &.mj-notification-fade-leave-to {
      opacity: 0;
    }
  }
  .mj-notification__header {
    display: flex;
    .mj-notification__title {
      flex-grow: 1;
      margin-right: 10px;
      color: #303133;
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
    }
    .mj-icon-close {
      flex-shrink: 0;
      font-size: 16px;
      vertical-align: middle;
      cursor: pointer;
    }
  }
}
</style>
