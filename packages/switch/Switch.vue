<template>
  <div class="mj-switch" :class="{ 'mj-switch--disabled': disabled }">
    <label :class="{ 'mj-switch--text-active': !status }">{{
      notActiveText
    }}</label>
    <div
      class="mj-switch--container"
      :class="{ 'mj-switch--active': status }"
      :style="{
        'background-color': status ? activeColor : notActiveColor,
        'border-color': status ? activeColor : notActiveColor
      }"
      @click="toggleStatus"
    >
      <div class="mj-switch--btn"></div>
    </div>
    <label :class="{ 'mj-switch--text-active': status }">{{
      activeText
    }}</label>
  </div>
</template>
<script>
export default {
  name: "MjSwitch",
  props: {
    value: {
      validator: function(value) {
        return (
          typeof value === "boolean" ||
          typeof value === "string" ||
          typeof value === "number"
        );
      },
      default: true
    },
    notActiveText: String,
    activeText: String,
    notActiveValue: String,
    activeValue: String,
    notActiveColor: String,
    activeColor: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      status: true
    };
  },
  methods: {
    toggleStatus() {
      if (!this.disabled) {
        this.status = !this.status;
        switch (typeof this.value) {
          case "boolean":
            this.$emit("input", this.status);
            break;
          case "string":
            this.$emit(
              "input",
              this.status ? this.activeText : this.notActiveText
            );
            break;
          case "number":
            this.$emit(
              "input",
              this.status ? this.activeValue : this.notActiveValue
            );
            break;
        }
        this.$emit("change", this.status);
      }
    }
  },
  created() {
    switch (typeof this.value) {
      case "boolean":
        this.status = this.value;
        break;
      case "string":
        this.status = this.value === this.activeText;
        break;
      case "number":
        this.status = this.value === this.activeValue;
        break;
    }
  }
};
</script>
<style lang="scss" scoped>
.mj-switch {
  &.mj-switch--disabled {
    cursor: not-allowed;
    .mj-switch--container {
      background-color: grayscale($red) !important;
      border-color: grayscale($red) !important;
      &.mj-switch--active {
        background-color: grayscale($green) !important;
        border-color: grayscale($green) !important;
      }
    }
  }
  label {
    float: left;
    color: $black;
    font-size: 14px;
    line-height: 20px;
    &.mj-switch--text-active {
      color: $blue;
    }
    &:first-child {
      margin-right: 1em;
    }
    &:last-child {
      margin-left: 1em;
    }
  }
  .mj-switch--container {
    float: left;
    width: 40px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: $red;
    border: 2px solid $red;
    transition: all 0.3s linear;
    .mj-switch--btn {
      width: 16px;
      height: 16px;
      background-color: $white;
      border-radius: 50%;
      transition: margin-left 0.3s linear;
    }
    &.mj-switch--active {
      border-color: $green;
      background-color: $green;
      .mj-switch--btn {
        margin-left: 20px;
      }
    }
  }
}
</style>
