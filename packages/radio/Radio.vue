<template>
  <div
    class="mj-radio"
    :class="{ 'mj-radio--checked': currValue === label }"
    @click="setValue"
  >
    <i class="mj-radio--check-block"></i>
    <label class="mj-radio--label"><slot></slot></label>
  </div>
</template>
<script>
export default {
  name: "MjRadio",
  props: {
    value: {
      validator: val => {
        return (
          typeof val === "string" ||
          typeof val === "boolean" ||
          typeof val === "number"
        );
      },
      required: true
    },
    label: {
      validator: val => {
        return (
          typeof val === "string" ||
          typeof val === "boolean" ||
          typeof val === "number"
        );
      },
      required: true
    }
  },
  inject: {
    radioValue: {
      from: "radioValue",
      default: null
    },
    setRadioValue: {
      from: "setRadioValue",
      default: null
    }
  },
  computed: {
    currValue: {
      get() {
        return this.radioValue || this.value || "";
      },
      set(val) {
        let currValue = this.currValue;
        if (currValue !== val) {
          if (this.setRadioValue) {
            this.setRadioValue(val);
          } else {
            this.$emit("input", val);
          }
          this.$emit("change", val, currValue);
        }
      }
    }
  },
  methods: {
    setValue() {
      this.currValue = this.label;
    }
  }
};
</script>
<style lang="scss" scoped>
.mj-radio {
  display: inline-block;
  overflow: hidden;
  & + .mj-radio {
    margin-left: 30px;
  }
  .mj-radio--check-block {
    margin-right: 16px;
    float: left;
    @include box-sizing(border-box);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid $borderColor;
  }
  .mj-radio--label {
    color: $black;
    float: left;
    line-height: 16px;
  }
  &.mj-radio--checked {
    .mj-radio--check-block {
      border: 5px solid $blue;
    }
    .mj-radio--label {
      color: $blue;
    }
  }
}
</style>
