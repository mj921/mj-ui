<template>
  <form class="mj-form" :class="'mj-form--label-' + labelPosition" action="">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "MjForm",
  mjComponentName: "MjForm",
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    labelWidth: {
      type: String,
      default: ""
    },
    labelPosition: {
      validator(val) {
        return ["left", "right"].indexOf(val) > -1;
      },
      default: "right"
    },
    rules: Object
  },
  provide() {
    return {
      mjForm: this
    };
  },
  data() {
    return {
      itemList: []
    };
  },
  methods: {
    validate(callback) {
      let validatePromise = this.itemList.map(item => item.validate());
      const validateResult = Promise.all(validatePromise);
      validateResult
        .then(() => {
          callback && callback(true);
          this.$emit("validate", true);
        })
        .catch(errors => {
          console.log(errors);
          callback && callback(false, errors);
          this.$emit("validate", false, errors);
        });
      return validateResult;
    },
    clearValidate() {
      this.itemList.forEach(item => item.clearValidate());
    }
  },
  created() {
    this.$on("MjForm.addItem", formItem => {
      this.itemList.push(formItem);
    });
    this.$on("MjForm.removeItem", formItem => {
      this.itemList.splice(this.itemList.indexOf(formItem), 1);
    });
  }
};
</script>

<style lang="scss">
.mj-form {
  @mixin labelAlign($position) {
    &.mj-form--label-#{$position} {
      .mj-form-item__label {
        text-align: $position;
      }
    }
  }
  @include labelAlign(left);
  @include labelAlign(right);
}
</style>
