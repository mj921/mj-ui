import PopperManage from "./PoperManage";
import { getScrollContainer } from "../dom";

let popperId = 1;
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    computePosition: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    reference: [Object, Element],
    popperOffset: {
      type: Number,
      default: 5
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskAppendToBody: {
      type: Boolean,
      default: true
    },
    scrollReference: {
      type: Boolean,
      default: false
    },
    placement: {
      validator(val) {
        return /^(bottom|left|right|top)(-(start|end))?$/.test(val);
      },
      default: "bottom"
    }
  },
  data() {
    return {
      popperPosition: "bottom",
      scrollContainer: null,
      _popperId: 1,
      _popperMask: null,
      _isRenderPopper: false,
      clearScrollSto: null,
      animateDelay: 0,
      placementMap: {
        bottom: "top",
        top: "bottom",
        left: "right",
        right: "left"
      },
      currPlacement: "bottom",
      popperArrowPosition: 0,
      popperArrowStyle: {}
    };
  },
  watch: {
    visible(val) {
      val ? this.updatePopper() : this.destroyPopper();
    }
  },
  methods: {
    updatePopper() {
      clearTimeout(this.clearScrollSto);
      this.clearScrollSto = null;
      if (!this.$el) {
        this.$nextTick(() => {
          this.updatePopper();
        });
        return;
      }
      this._isRenderPopper = true;
      this.scrollContainer &&
        this.scrollContainer.addEventListener("scroll", this.scrollHandle);
      if (this.reference) {
        this.updatePopperPosition();
      } else if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
      if (this.mask) {
        this._popperMask = PopperManage.openMask(
          this.maskAppendToBody,
          this.$el.parentNode,
          this._popperMask
        );
      }
      this.$el.style.zIndex = PopperManage.getZIndex();
    },
    updatePopperPosition() {
      const reference =
        (this.reference && this.reference.$el) || this.reference;
      const refBcr = reference.getBoundingClientRect();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
      this.$nextTick(() => {
        const elBcr = this.$el.getBoundingClientRect();
        if (
          /^bottom/.test(this.placement) &&
          elBcr.height + this.popperOffset >
            window.innerHeight - refBcr.bottom &&
          refBcr.top > window.innerHeight - refBcr.bottom
        ) {
          this.currPlacement = this.placement.replace("bottom", "top");
        } else if (
          /^top/.test(this.placement) &&
          elBcr.height + this.popperOffset > refBcr.bottom &&
          refBcr.top < window.innerHeight - refBcr.bottom
        ) {
          this.currPlacement = this.placement.replace("top", "bottom");
        } else {
          this.currPlacement = this.placement;
        }
        if (/^(bottom|top)(-(start|end))?$/.test(this.currPlacement)) {
          if (/^bottom/.test(this.currPlacement)) {
            const top = refBcr.bottom + document.body.scrollTop;
            this.$el.style.top = top + this.popperOffset + "px";
          } else {
            const top = refBcr.top - elBcr.height + document.body.scrollTop;
            this.$el.style.top = top - this.popperOffset + "px";
          }
          if (/end$/.test(this.currPlacement)) {
            this.$el.style.left =
              refBcr.left - (elBcr.width - refBcr.width) + "px";
          } else if (!/start$/.test(this.currPlacement)) {
            this.$el.style.left =
              refBcr.left - (elBcr.width - refBcr.width) / 2 + "px";
          } else {
            this.$el.style.left = refBcr.left + "px";
          }
          this.popperArrowPosition = refBcr.left + refBcr.width / 2;
          this.popperArrowStyle = {
            top: this.left + "px"
          };
        } else {
          if (/^right/.test(this.currPlacement)) {
            const left = refBcr.right + document.body.scrollLeft;
            this.$el.style.left = left + this.popperOffset + "px";
          } else {
            const left = refBcr.left - elBcr.width + document.body.scrollLeft;
            this.$el.style.left = left - this.popperOffset + "px";
          }
          if (/end$/.test(this.currPlacement)) {
            this.$el.style.top =
              refBcr.top - (elBcr.height - refBcr.height) + "px";
          } else if (!/start$/.test(this.currPlacement)) {
            this.$el.style.top =
              refBcr.top - (elBcr.height - refBcr.height) / 2 + "px";
          } else {
            this.$el.style.top = refBcr.top + "px";
          }
          this.popperArrowPosition = refBcr.top + refBcr.height / 2;
          this.popperArrowStyle = {
            top: this.popperArrowPosition + "px"
          };
        }
      });
    },
    destroyPopper() {
      this.clearScrollSto = setTimeout(() => {
        this.scrollContainer &&
          this.scrollContainer.removeEventListener("scroll", this.scrollHandle);
      }, this.animateDelay);
      if (this.mask) {
        PopperManage.closeMask(this._popperMask);
      }
    },
    scrollHandle() {
      if (this.reference) {
        this.updatePopperPosition();
      }
    },
    closePopper() {
      this.$emit("update:visible", false);
    }
  },
  mounted() {
    if (this.scrollReference) {
      if (this.reference) {
        this.scrollContainer = getScrollContainer(
          (this.reference && this.reference.$el) || this.reference,
          true
        );
      }
    } else {
      this.scrollContainer = getScrollContainer(this.$el, true);
    }
  },
  created() {
    this._popperId = popperId++;
    this.currPlacement = this.placement;
  },
  beforeDestroy() {
    this.destroyPopper();
    if (
      this._popperMask &&
      this._popperMask._mj_parentEl &&
      this._popperMask._mj_parentEl.removeChild
    ) {
      this._popperMask._mj_parentEl.removeChild(this._popperMask);
    }
    if (this.appendToBody && this._isRenderPopper) {
      try {
        document.body.removeChild(this.$el);
      } catch (e) {
        console.log();
      }
    }
  }
};
