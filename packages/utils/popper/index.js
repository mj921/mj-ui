import PopperManage from "./PoperManage";
import { getScrollContainer } from "../dom";

let popperId = 1;
export default {
  props: {
    showPopper: {
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
    }
  },
  data() {
    return {
      popperPosition: "bottom",
      scrollContainer: null,
      _popperId: 1
    };
  },
  watch: {
    showPopper(val) {
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
      this.updatePopperPosition();
      this.$el.style.zIndex = PopperManage.getZIndex();
    },
    updatePopperPosition() {
      const reference =
        (this.reference && this.reference.$el) ||
        (this.$parent && this.$parent.$el);
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
    },
    scrollHandle() {
      this.updatePopperPosition();
    },
    closePopper() {
      this.$emit("update:showPopper", false);
    }
  },
  mounted() {
    this.scrollContainer = getScrollContainer(this.$el, true);
  },
  created() {
    this._popperId = popperId++;
  }
};
