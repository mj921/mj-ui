<template>
    <div class="mj-select">
        <div
            class="mj-select--ipt"
            :class="{
                'mj-select--open': openFlag,
                'mj-select--disabled': disabled
            }"
            @click="handleClick">
            <input type="text" :value="label" disabled>
            <i v-show="!openFlag" class="mj-icon-drop-down"></i>
            <i v-show="openFlag" class="mj-icon-drop-up"></i>
        </div>
        <transition>
            <div v-show="openFlag" class="mj-select--options">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Provide } from 'vue-property-decorator';
import { Option } from './select';
@Component
export default class MjSelect extends Vue {
    @Prop({
        validator: function(value) {
            return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
        }
    })
    value!: string | boolean | number;
    @Prop({
        type: Boolean,
        default: false
    })
    disabled!: boolean;
    // @Prop({type: Boolean, default: false})
    // multiple!: boolean;
    label = "";
    openFlag = false;
    options: {[key: string]: Option} = {};
    @Provide("addOption")
    addOption (option: Option) {
        this.options["option" + option.value] = option;
        if (option.value === this.value) {
            this.label = option.label;
            option.option.selectedOption(true);
        }
    }
    @Provide("selectOption")
    selectOption (value: any) {
        if (this.options["option" + this.value]) {
            this.options["option" + this.value].option.selectedOption(false);
        }
        this.$emit("change", this.value, value);
        this.$emit("input", value);
        this.label = this.options["option" + value].label;
        this.options["option" + value].option.selectedOption(true);
        this.openFlag = false;
    }
    handleClick (e: Event) {
        e.stopPropagation();
        if (!this.disabled) {
            this.openFlag = !this.openFlag;
        }
    }
    _domClick () {
        this.openFlag = false;
    }
    created () {
        document.addEventListener("click", this._domClick);
    }
    destroy () {
        document.removeEventListener("click", this._domClick);
    }
}
</script>
<style lang="scss" scoped>
.mj-select{
    display: inline-block;
    position: relative;
    .mj-select--ipt{
        border: 1px solid $borderColor;
        background-color: $white;
        border-radius: 2px;
        position: relative;
        cursor: pointer;
        .mj-icon-drop-down{
            position: absolute;
            right: 12px;
            top: 9px;
        }
        &.mj-select--open{
            border-color: $blue;
            .mj-icon-drop-up{
                position: absolute;
                right: 12px;
                top: 9px;
            }
        }
        input{
            padding: 0 38px 0 20px;
            height: 38px;
            border: none;
            line-height: 38px;
            width: 150px;
            font-size: 14px;
        }
        &.mj-select--disabled{
            background-color: $disabled;
            cursor: not-allowed;
            &::after{
                border-top-color: $disabled;
            }
            &.mj-select--open{
                &::after{
                    border-top-color: transparent;
                    border-bottom-color: $disabled;
                }
            }
            input{
                background-color: $disabled;
                cursor: not-allowed;
            }
        }
    }
    .mj-select--options{
        position: absolute;
        top: 50px;
        left: 0;
        width: 100%;
        border: 1px solid $borderColor;
        border-radius: 2px;
        padding: 5px 0;
        background-color: $white;
        box-shadow: 0 0 5px 0 $borderColor;
    }
}
</style>
