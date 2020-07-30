<script>
import Vue from "vue";
import TooltipPopper from "./TooltipPopper";
const ToolPop = Vue.extend(TooltipPopper);
export default {
  name: "MjTooltip",
  props: {
    content: {
      type: String,
      default: ""
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
      tpComp: null
    };
  },
  created() {
    this.tpComp = new ToolPop({
      data: {
        content: this.content
      }
    });
  },
  methods: {
    show() {
      this.tpComp.visible = true;
    },
    hide() {
      this.tpComp.visible = false;
    }
  },
  mounted() {
    this.tpComp.popperOffset = 10;
    this.tpComp.placement = this.placement;
    this.tpComp.scrollReference = true;
    this.tpComp.reference = this.$el;
    this.tpComp.$mount();
    this.$el.addEventListener("mouseenter", this.show);
    this.$el.addEventListener("mouseleave", this.hide);
    this.$emit("hook:beforeDestroy", () => {
      if (this.$el) {
        this.$el.removeEventListener("mouseenter", this.show);
        this.$el.removeEventListener("mouseleave", this.hide);
      }
    });
  },
  render() {
    return this.$slots.default
      ? this.$slots.default instanceof Array
        ? this.$slots.default[0]
        : this.$slots.default
      : null;
  }
};
</script>

<style></style>
