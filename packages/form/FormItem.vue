<template>
  <div class="mj-form-item" :class="{ 'mj-form-item--error': isError }">
    <div class="mj-form-item__label" :style="labelStyle">{{ label }}</div>
    <div class="mj-form-item__content">
      <slot></slot>
      <transition name="mj-form-item__error-fade">
        <div class="mj-form-item__message" v-show="isError && errorMessage">
          {{ errorMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import Emitter from "../utils/emitter";
export default {
  name: "MjFormItem",
  mixins: [Emitter],
  mjComponentName: "MjFormItem",
  props: {
    prop: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    labelWidth: {
      type: String,
      default: ""
    }
  },
  inject: ["mjForm"],
  computed: {
    labelStyle() {
      let sty = {};
      let labelWidth = this.labelWidth || this.mjForm.labelWidth;
      if (labelWidth !== "auto") {
        sty.width = labelWidth;
      }
      return sty;
    }
  },
  data() {
    return {
      isError: false,
      errorMessage: ""
    };
  },
  methods: {
    validate(trigger) {
      if (!this.prop) return;
      let rules = this.rules || (this.mjForm && this.mjForm.rules[this.prop]);
      if (rules && trigger) {
        rules = rules.filter(
          item => item.trigger === trigger || item.trigger === undefined
        );
      }
      if (!rules || rules.length === 0) return;
      const descriptor = {
        [this.prop]: rules
      };
      const validator = new AsyncValidator(descriptor);
      const model = {
        [this.prop]: this.mjForm && this.mjForm.value[this.prop]
      };
      return new Promise((resolve, reject) => {
        validator.validate(model, { firstFields: true }, errors => {
          if (errors && errors.length > 0) {
            this.isError = true;
            this.errorMessage = errors[0].message;
            reject(errors);
          } else {
            this.clearValidate();
            resolve();
          }
        });
      });
    },
    clearValidate() {
      this.isError = false;
      this.errorMessage = "";
    }
  },
  mounted() {
    this.$on("MjFormItem.blur", () => {
      this.validate("blur");
    });
    this.$on("MjFormItem.change", () => {
      this.validate("change");
    });
    this.emitParentEvent("MjForm", "MjForm.addItem", this);
    this.$on("hook:beforeDestroy", () => {
      this.emitParentEvent("MjForm", "MjForm.removeItem", this);
    });
  }
};
</script>

<style lang="scss">
.mj-form-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .mj-form-item__label {
    padding-right: 16px;
    flex-shrink: 0;
    text-align: right;
  }
  .mj-form-item__content {
    flex-grow: 1;
    width: 100%;
  }
  &.mj-form-item--error {
    .mj-form-item__content {
      position: relative;
      .mj-form-item__message {
        position: absolute;
        bottom: -20px;
        line-height: 20px;
        font-size: 12px;
        color: $red;
      }
      .mj-input input,
      .mj-select .mj-select--ipt {
        border-color: $red;
      }
      .mj-form-item__error-fade-enter-active,
      .mj-form-item__error-fade-leave-active {
        transition: all 0.3s;
      }
      .mj-form-item__error-fade-enter,
      .mj-form-item__error-fade-leave-to {
        transform: translateY(-10px);
        opacity: 0;
      }
    }
  }
}
</style>
