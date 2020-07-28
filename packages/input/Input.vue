<template>
  <div class="mj-input" @click="clickHandle">
    <input
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="inputHandle"
      @blur="blurHandle($event)"
      @focus="focusHandle($event)"
    />
  </div>
</template>
<script>
import Emitter from "../utils/emitter";
export default {
  name: "MjInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    inputHandle() {
      this.$emit("input", this.$refs.input.value);
      this.$emit("change", this.$refs.input.value);
      this.emitParentEvent("MjFormItem", "MjFormItem.change");
    },
    blurHandle(e) {
      this.$emit("blur", e);
      this.emitParentEvent("MjFormItem", "MjFormItem.blur");
    },
    focusHandle(e) {
      this.$emit("focus", e);
    },
    clickHandle(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.mj-input {
  display: inline-block;
  width: 100%;
  input {
    width: 100%;
    height: 40px;
    padding: 0 20px;
    @include box-sizing(border-box);
    border: 1px solid $black_borderColor;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    &:focus {
      border-color: $blue;
    }
  }
}
</style>
