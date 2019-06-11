<template>
  <div
    class="mj-checkbox"
    :class="{
      'mj-checkbox--checked': mj_checked,
      'mj-checkbox--disabled': disabled
    }"
    @click="handleClick"
    @selectstart="handleSelect"
  >
    <i :class="{ 'mj-icon-success': mj_checked }"></i>
    <div class="mj-checkbox--text" @selectstart="handleSelect">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "MjCheckbox",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      mj_checked: this.checked
    };
  },
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.mj_checked = !this.mj_checked;
        this.$emit("change", this.mj_checked);
      }
    },
    handleSelect() {
      return false;
    }
  }
};
</script>
<style lang="scss" scoped>
.mj-checkbox {
  display: inline-block;
  overflow: hidden;
  -moz-user-select: none;
  i {
    float: left;
    display: block;
    width: 12px;
    height: 12px;
    border: 1px solid $borderColor;
    border-radius: 2px;
    background-color: $white;
  }
  .mj-checkbox--text {
    margin-left: 10px;
    float: left;
    font-size: 14px;
    line-height: 14px;
    color: $black;
    cursor: default;
  }
  & + .mj-checkbox {
    margin-left: 20px;
  }
  &.mj-checkbox--checked {
    i {
      background-color: $blue;
      border-color: $blue;
      text-align: center;
      color: $white;
      line-height: 12px;
      font-size: 12px;
    }
    .mj-checkbox--text {
      color: $blue;
    }
  }
  &.mj-checkbox--disabled {
    i {
      background-color: $disabledColor;
      border-color: $borderColor;
      text-align: center;
      color: $disabledTextColor;
      line-height: 12px;
      font-size: 12px;
      cursor: not-allowed;
    }
    .mj-checkbox--text {
      color: $disabledTextColor;
      cursor: not-allowed;
    }
  }
}
</style>
