<template>
  <div class="mj-select" v-clickoutsit="handlerClose">
    <div
      ref="reference"
      class="mj-select--ipt"
      :class="{
        'mj-select--open': openFlag,
        'mj-select--disabled': disabled
      }"
      @click="handleClick"
    >
      <div ref="tags" class="mj-select--tags" v-if="multiple" @click.stop>
        <mj-tag
          v-for="item in selectedList"
          size="small"
          closeabled
          :key="item.value"
          @close="closeTag(item)"
        >
          {{ item.label || item.value }}
        </mj-tag>
      </div>
      <input
        ref="ipt"
        :style="{ height: iptHeight + 'px' }"
        type="text"
        :value="label"
        readonly
      />
      <div
        class="mj-select--icons"
        @mouseover="iconsMouseover"
        @mouseout="iconsMouseout"
      >
        <i
          v-show="closeHover"
          class="mj-icon-close"
          @click.stop="clearValue"
        ></i>
        <i v-show="!openFlag && !closeHover" class="mj-icon-drop-down"></i>
        <i v-show="openFlag && !closeHover" class="mj-icon-drop-up"></i>
      </div>
    </div>
    <select-option-panel
      :visible.sync="openFlag"
      :reference="$refs.reference"
      :option-num="
        options && typeof options === 'object' ? Object.keys(options).length : 0
      "
    >
      <slot></slot>
    </select-option-panel>
  </div>
</template>
<script>
import MjTag from "../tag/index";
import SelectOptionPanel from "./SelectOptionPanel";
import clickoutsit from "../utils/directives/clickoutsit";
import Emitter from "../utils/emitter";

export default {
  name: "MjSelect",
  mixins: [Emitter],
  directives: {
    clickoutsit
  },
  props: {
    value: {
      validator: function(value) {
        return (
          typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean" ||
          value instanceof Array
        );
      },
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      label: "",
      openFlag: false,
      options: {},
      selectedList: [],
      iptHeight: 38,
      closeHover: false
    };
  },
  computed: {
    optionNum() {
      return this.options && typeof this.options === "object"
        ? Object.keys(this.options).length
        : 0;
    }
  },
  provide() {
    return {
      addOption: option => {
        this.options["option" + option.value] = option;
        if (option.value === this.value) {
          this.label = option.label;
          option.option.selectedOption(true);
        }
        if (
          this.multiple &&
          this.value instanceof Array &&
          this.value.length > 0
        ) {
          if (this.value.indexOf(option.value) > 0) {
            this.selectedList.push(option);
            this.$nextTick(this._setIptHeight);
          }
        }
      },
      selectOption: option => {
        if (this.multiple) {
          const index = this.selectedList.indexOf(option);
          if (index > -1) {
            this.selectedList.splice(index, 1);
            if (this.options["option" + option.value]) {
              this.options["option" + option.value].option.selectedOption(
                false
              );
            }
          } else {
            this.selectedList.push(option);
            if (this.options["option" + option.value]) {
              this.options["option" + option.value].option.selectedOption(true);
            }
          }
          const value = this.selectedList.map(item => item.value);
          this.$emit("change", this.value, value);
          this.$emit("input", value);
          this.$nextTick(this._setIptHeight);
        } else {
          if (this.options["option" + this.value]) {
            this.options["option" + this.value].option.selectedOption(false);
          }
          this.$emit("change", this.value, option.value);
          this.$emit("input", option.value);
          this.label = this.options["option" + option.value].label;
          this.options["option" + option.value].option.selectedOption(true);
          this.openFlag = false;
        }
        this.emitParentEvent("MjFormItem", "MjFormItem.change");
      }
    };
  },
  methods: {
    handlerClose() {
      this.openFlag = false;
    },
    handleClick() {
      if (!this.disabled) {
        this.openFlag = !this.openFlag;
      }
    },
    iconsMouseover() {
      if (
        this.clearable &&
        (this.value !== "" ||
          (this.value instanceof Array && this.value.length > 0))
      ) {
        this.closeHover = true;
      }
    },
    iconsMouseout() {
      this.closeHover = false;
    },
    clearValue() {
      if (this.multiple) {
        this.selectedList.forEach(item => {
          this.options["option" + item.value].option.selectedOption(false);
        });
        this.selectedList = [];
      } else {
        if (this.options["option" + this.value]) {
          this.options["option" + this.value].option.selectedOption(false);
        }
        this.label = "";
      }
      const value = this.value;
      this.$emit("input", "");
      this.$emit("change", value, this.value);
      this.closeHover = false;
      this.$nextTick(this._setIptHeight);
    },
    /**
     * 关闭多选标签
     */
    closeTag(option) {
      const index = this.selectedList.indexOf(option);
      if (index > -1) {
        this.selectedList.splice(index, 1);
        if (this.options["option" + option.value]) {
          this.options["option" + option.value].option.selectedOption(false);
        }
        const value = this.selectedList.map(item => item.value);
        this.$emit("change", this.value, value);
        this.$emit("input", value);
        this.$nextTick(this._setIptHeight);
      }
    },
    _setIptHeight() {
      if (this.$refs.tags) {
        let h = this.$refs.tags.offsetHeight;
        this.iptHeight = h > 38 ? h : 38;
      } else {
        this.iptHeight = 38;
      }
    }
  },
  components: {
    "mj-tag": MjTag,
    SelectOptionPanel
  }
};
</script>
<style lang="scss" scoped>
.mj-select {
  display: inline-block;
  position: relative;
  .mj-select--ipt {
    padding: 0 38px 0 20px;
    border: 1px solid $black_borderColor;
    background-color: $white;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
    .mj-select--icons {
      position: absolute;
      right: 0;
      width: 38px;
      top: 0;
      height: 100%;
      text-align: center;
      [class*=" mj-icon-"],
      [class^="mj-icon-"] {
        position: absolute;
        top: 50%;
        margin-top: -8px;
        left: 11px;
      }
    }
    &.mj-select--open {
      border-color: $blue;
    }
    .mj-select--tags {
      position: absolute;
      left: 0;
      top: 0;
      padding-top: 7px;
      .mj-tag {
        margin-bottom: 7px;
        margin-left: 7px;
      }
    }
    input {
      height: 38px;
      border: none;
      line-height: 38px;
      width: 150px;
      font-size: 14px;
      outline: none;
    }
    &.mj-select--disabled {
      background-color: $black_disabledColor;
      color: $black-primaryColor;
      cursor: not-allowed;
      &::after {
        border-top-color: $black_disabledColor;
      }
      &.mj-select--open {
        &::after {
          border-top-color: transparent;
          border-bottom-color: $black_disabledColor;
        }
      }
      input {
        background-color: transparent;
        cursor: not-allowed;
      }
    }
  }
  .mj-select--options {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    border: 1px solid $black_borderColor;
    border-radius: 2px;
    padding: 5px 0;
    background-color: $white;
    box-shadow: 0 0 5px 0 $black_borderColor;
  }
}
</style>
