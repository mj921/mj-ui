<template>
  <div class="mj-scroll">
    <div
      ref="scrollWrap"
      class="mj-scroll__wrap"
      :class="[wrapClass]"
      :style="{
        overflowY: overflowY ? 'scroll' : 'hidden',
        overflowX: overflowX ? 'scroll' : 'hidden',
        marginRight: (overflowY ? -barWidth : '') + 'px',
        marginBottom: (overflowX ? -barWidth : '') + 'px',
        height: overflowY ? '100%' : '',
        width: overflowX ? '100%' : ''
      }"
      @scroll="handleScroll"
    >
      <div class="mj-scroll__view" ref="scrollView">
        <slot></slot>
      </div>
    </div>
    <scroll-thumb
      class="mj-scroll__bar"
      ref="thumbVerical"
      v-if="overflowY"
      verical
      :scroll-container="scrollWrap"
    />
    <scroll-thumb
      class="mj-scroll__bar"
      ref="thumbHorizontal"
      v-if="overflowX"
      :verical="false"
      :scroll-container="scrollWrap"
    />
  </div>
</template>

<script>
import ScrollThumb from "./ScrollThumb";
import {
  getScrollBarWidth,
  addResizeListener,
  removeResizeListener
} from "../utils/dom";
export default {
  name: "mj-scroll-view",
  components: {
    ScrollThumb
  },
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
      moveY: 0,
      scrollWrap: null
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
      this.$refs.thumbVerical && this.$refs.thumbVerical.updateThumb();
      this.$refs.thumbHorizontal && this.$refs.thumbHorizontal.updateThumb();
    },
    handleScroll(e) {
      this.$emit("scroll", e);
      this.$refs.thumbVerical && this.$refs.thumbVerical.handleScroll();
      this.$refs.thumbHorizontal && this.$refs.thumbHorizontal.handleScroll();
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
      this.scrollWrap = this.$refs.scrollWrap;
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
  &:hover {
    & > .mj-scroll__bar {
      display: block;
    }
  }
}
</style>
