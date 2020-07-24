<template>
  <transition name="fade">
    <div
      class="mj-scroll__bar"
      :class="verical ? 'is-vertical' : 'is-horizontal'"
      @click.stop
      v-show="thumbSize !== '100%'"
    >
      <div
        class="mj-scroll__thumb"
        @mousedown.stop.prevent="handleMouseDown"
        @select.prevent.stop
        :style="thumbStyle"
      ></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    verical: Boolean,
    scrollContainer: {}
  },
  data() {
    return {
      moveD: 0,
      thumbScrollD: 0,
      thumbD: 0,
      thumbSize: "100%"
    };
  },
  computed: {
    position() {
      return this.verical ? "Top" : "Left";
    },
    wOrH() {
      return this.verical ? "Height" : "Width";
    },
    thumbStyle() {
      if (this.verical) {
        return {
          height: this.thumbSize,
          transform: `translateY(${this.thumbD})`
        };
      } else {
        return {
          width: this.thumbSize,
          transform: `translateX(${this.thumbD})`
        };
      }
    }
  },
  methods: {
    updateThumb() {
      if (
        !this.scrollContainer ||
        this.scrollContainer["scroll" + this.wOrH] === 0
      ) {
        this.thumbSize = 0;
        return;
      }
      this.thumbSize =
        (this.scrollContainer["client" + this.wOrH] /
          this.scrollContainer["scroll" + this.wOrH]) *
          100 +
        "%";
    },
    handleScroll() {
      if (
        !this.scrollContainer ||
        this.scrollContainer["client" + this.wOrH] === 0
      ) {
        this.thumbD = 0;
        return;
      }
      this.thumbD =
        (this.scrollContainer["scroll" + this.position] /
          this.scrollContainer["client" + this.wOrH]) *
          100 +
        "%";
    },
    handleMouseDown(e) {
      this.thumbScrollD = this.scrollContainer["scroll" + this.position];
      this.moveD = this.verical ? e.clientY : e.clientX;
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseMove(e) {
      this.scrollContainer["scroll" + this.position] =
        this.thumbScrollD + (this.verical ? e.clientY : e.clientX) - this.moveD;
    },
    handleMouseUp() {
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
    }
  }
};
</script>

<style lang="scss" scoped>
.mj-scroll__bar {
  display: none;
  position: absolute;
  right: 2px;
  bottom: 2px;
  z-index: 1;
  &.fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  &.fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .mj-scroll__thumb {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 3px;
  }
  &.is-vertical {
    height: calc(100% - 4px);
    width: 6px;
    .mj-scroll__thumb {
      width: 100%;
      cursor: pointer;
      -moz-user-select: none;
    }
  }
  &.is-horizontal {
    width: calc(100% - 4px);
    height: 6px;
    .mj-scroll__thumb {
      height: 100%;
      cursor: pointer;
      -moz-user-select: none;
    }
  }
}
</style>
