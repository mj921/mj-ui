<template>
  <div class="mj-color-selector" v-clickoutsit="hidePanel">
    <div
      ref="reference"
      @click="shopPanel"
      class="mj-color-selector__current"
      :style="{ backgroundColor: color }"
    ></div>
    <color-panel
      :color="color"
      :visible.sync="visible"
      :reference="$refs.reference"
      :default-colors="defaultColors"
      placement="bottom-start"
      @select-color="selectColor"
    />
  </div>
</template>

<script>
import clickoutsit from "../utils/directives/clickoutsit";
import ColorPanel from "./ColorPanel";
export default {
  name: "MjColorSelector",
  components: {
    ColorPanel
  },
  directives: {
    clickoutsit
  },
  props: {
    value: {
      type: String,
      validator(val) {
        return /^#[0-9a-f]{6}$/.test(val);
      },
      default: "#000000"
    },
    defaultColors: {
      type: Array,
      default: () => [
        "#000000",
        "#ffffff",
        "#ff0000",
        "#00ff00",
        "#0000ff",
        "#ffff00",
        "#ff00ff",
        "#00ffff",
        "#333333",
        "#666666",
        "#999999",
        "#aaaaaa",
        "#cccccc",
        "#dddddd",
        "#eeeeee",
        "#808080",
        "#fefefe",
        "#4b8cf0",
        "#123456",
        "#199221"
      ]
    }
  },
  computed: {
    color: {
      get() {
        return this.value;
      },
      set(color) {
        this.$emit("input", color);
        this.$emit("change", color);
      }
    }
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    shopPanel() {
      this.visible = true;
    },
    hidePanel() {
      this.visible = false;
    },
    selectColor(color) {
      this.color = color;
    }
  }
};
</script>

<style lang="scss" scoped>
.mj-color-selector {
  display: inline-block;
  &__current {
    width: 50px;
    height: 50px;
  }
}
</style>
