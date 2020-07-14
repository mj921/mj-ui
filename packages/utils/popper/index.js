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
    onlyOne: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskAppendToBody: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      popperPosition: "bottom",
      scrollContainer: null,
      _popperId: 1,
      _popperMask: null
    };
  },
  watch: {
    visible(val) {
      val ? this.updatePopper() : this.destroyPopper();
    }
  },
  methods: {
    updatePopper() {
      if (this.onlyOne) {
        PopperManage.setOnePopper(this._popperId, this);
      }
      if (!this.$el) {
        this.$nextTick(() => {
          this.updatePopper();
        });
        return;
      }
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
      const reference = this.reference && this.reference.$el;
      const refBcr = reference.getBoundingClientRect();
      if (this.appendToBody) {
        const top = refBcr.bottom + document.body.scrollTop;
        this.$el.style.top = top + this.popperOffset + "px";
        this.$el.style.left = refBcr.left + "px";
        document.body.appendChild(this.$el);
      }
      this.$nextTick(() => {
        const elBcr = this.$el.getBoundingClientRect();
        this.popperPosition =
          elBcr.height + this.popperOffset >
            window.innerHeight - refBcr.bottom &&
          refBcr.top > window.innerHeight - refBcr.bottom
            ? "top"
            : "bottom";
      });
    },
    destroyPopper() {
      this.scrollContainer.removeEventListener("scroll", this.scrollHandle);
      if (this.mask) {
        PopperManage.closeMask(this._popperMask);
      }
    },
    scrollHandle() {
      this.updatePopperPosition();
    },
    closePopper() {
      this.$emit("update:visible", false);
    }
  },
  mounted() {
    this.scrollContainer = getScrollContainer(this.$el, true);
  },
  created() {
    this._popperId = popperId++;
  },
  beforeDestroy() {
    if (this._popperMask) {
      this._popperMask._mj_parentEl.removeChild(this._popperMask);
    }
  }
};
