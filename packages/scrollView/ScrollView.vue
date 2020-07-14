<template>
  <div class="mj-scroll">
    <div
      ref="scrollWrap"
      class="mj-scroll__wrap"
      :class="[wrapClass]"
      :style="{
        overflowY: overflowY ? 'scroll' : 'hidden',
        overflowX: overflowX ? 'scroll' : 'hidden',
        marginRight: -barWidth + 'px'
      }"
      @scroll="handleScroll"
    >
      <div class="mj-scroll__view" ref="scrollView">
        <slot></slot>
      </div>
    </div>
    <transition name="fade">
      <div
        class="mj-scroll__bar is-vertical"
        @click.stop
        v-show="thumbHeight !== '100%'"
      >
        <div
          class="mj-scroll__thumb"
          @mousedown.stop.prevent="handleMouseDown"
          @select.prevent.stop
          :style="{ height: thumbHeight, transform: `translateY(${thumbTop})` }"
        ></div>
      </div>
    </transition>
  </div>
</template>

<script>
import {
  getScrollBarWidth,
  addResizeListener,
  removeResizeListener
} from "../utils/dom";
export default {
  name: "mj-scroll-view",
  props: {
    overflowY: {
      type: Boolean,
      default: true
    },
    overflowX: {
      type: Boolean,
      default: false
    },
    wrapClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      barWidth: getScrollBarWidth(),
      thumbHeight: 0,
      thumbTop: 0,
      thumbScrollTop: 0,
      moveY: 0
    };
  },
  computed: {
    wrapHeight() {
      return (
        (this.$refs &&
          this.$refs.scrollWrap &&
          this.$refs.scrollWrap.clientHeight) ||
        0
      );
    },
    wrapScrollHeight() {
      return (
        (this.$refs &&
          this.$refs.scrollWrap &&
          this.$refs.scrollWrap.scrollHeight) ||
        0
      );
    }
  },
  methods: {
    updateThumb() {
      if (
        !this.$refs ||
        !this.$refs.scrollWrap ||
        this.$refs.scrollWrap.scrollHeight === 0
      ) {
        this.thumbHeight = 0;
        return;
      }
      this.thumbHeight =
        (this.$refs.scrollWrap.clientHeight /
          this.$refs.scrollWrap.scrollHeight) *
          100 +
        "%";
    },
    handleScroll() {
      if (
        !this.$refs ||
        !this.$refs.scrollWrap ||
        this.$refs.scrollWrap.clientHeight === 0
      ) {
        this.thumbTop = 0;
        return;
      }
      this.thumbTop =
        (this.$refs.scrollWrap.scrollTop / this.$refs.scrollWrap.clientHeight) *
          100 +
        "%";
    },
    handleMouseDown(e) {
      this.thumbScrollTop = this.$refs.scrollWrap.scrollTop;
      this.moveY = e.clientY;
      document.addEventListener("mousemove", this.handleMouseMove);
      document.addEventListener("mouseup", this.handleMouseUp);
    },
    handleMouseMove(e) {
      this.$refs.scrollWrap.scrollTop =
        this.thumbScrollTop + e.clientY - this.moveY;
    },
    handleMouseUp() {
      document.removeEventListener("mousemove", this.handleMouseMove);
      document.removeEventListener("mouseup", this.handleMouseUp);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updateThumb();
    });
    addResizeListener(this.$refs.scrollView, this.updateThumb);
    this.$emit("hook:beforeDestroy", function() {
      removeResizeListener(this.$refs.scrollView, this.updateThumb);
    });
  }
};
</script>

<style lang="scss" scoped>
.mj-scroll {
  overflow: hidden;
  position: relative;
  height: 100%;
  .mj-scroll__wrap {
    height: 100%;
  }
  .mj-scroll__bar {
    display: none;
    position: absolute;
    right: 2px;
    bottom: 2px;
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
  }
  &:hover {
    .mj-scroll__bar {
      display: block;
    }
  }
}
</style>