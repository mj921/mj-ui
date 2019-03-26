<template>
    <div class="mj-select">
        <div
            class="mj-select--ipt"
            :class="{
                'mj-select--open': openFlag,
                'mj-select--disabled': disabled
            }"
            @click="handleClick">
            <div ref="tags" class="mj-select--tags" v-if="multiple" @click.stop>
                <mj-tag
                    v-for="item in selectedList"
                    size="small"
                    closeabled
                    :key="item.value"
                    @close="closeTag(item)"
                >
                    {{item.label || item.value}}
                </mj-tag>
            </div>
            <input ref="ipt" :style="{height: iptHeight + 'px'}" type="text" :value="label" disabled>
            <div class="mj-select--icons" @mouseover="iconsMouseover" @mouseout="iconsMouseout">
                <i v-show="closeHover" class="mj-icon-close" @click.stop="clearValue"></i>
                <i v-show="!openFlag && !closeHover" class="mj-icon-drop-down"></i>
                <i v-show="openFlag && !closeHover" class="mj-icon-drop-up"></i>
            </div>
        </div>
        <transition>
            <div v-show="openFlag" class="mj-select--options" :style="{top: iptHeight + 12 + 'px'}">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Provide } from 'vue-property-decorator';
import { Option } from './select';
import MjTag from '../tag/index';
@Component({
    components: {
        "mj-tag": MjTag
    }
})
export default class MjSelect extends Vue {
    @Prop({
        validator: function(value) {
            return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || value instanceof Array;
        },
        default: ""
    })
    value!: string | boolean | number | any[];
    @Prop({
        type: Boolean,
        default: false
    })
    disabled!: boolean;
    @Prop({type: Boolean, default: false})
    multiple!: boolean;
    @Prop({type: Boolean, default: false})
    clearabled!: boolean;
    label = "";
    openFlag = false;
    options: {[key: string]: Option} = {};
    selectedList:any[] = [];
    iptHeight = 38;
    closeHover = false;
    @Provide("addOption")
    addOption (option: Option) {
        this.options["option" + option.value] = option;
        if (option.value === this.value) {
            this.label = option.label;
            option.option.selectedOption(true);
        }
        if (this.multiple && this.value instanceof Array && this.value.length > 0) {
            if (this.value.indexOf(option.value) > 0) {
                this.selectedList.push(option);
                this.$nextTick(this._setIptHeight);
            }
        }
    }
    @Provide("selectOption")
    selectOption (option: any) {
        if (this.multiple) {
            const index = this.selectedList.indexOf(option)
            if (index > -1) {
                this.selectedList.splice(index, 1);
                if (this.options["option" + option.value]) {
                    this.options["option" + option.value].option.selectedOption(false);
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
    }
    handleClick (e: Event) {
        e.stopPropagation();
        if (!this.disabled) {
            this.openFlag = !this.openFlag;
        }
    }
    iconsMouseover () {
        if (this.clearabled && (this.value !== '' || (this.value as Object instanceof Array && this.value.length > 0))) {
            this.closeHover = true;
        }
    }
    iconsMouseout () {
        this.closeHover = false;
    }
    clearValue () {
        if (this.multiple) {
            this.selectedList.forEach(item => {
                this.options["option" + item.value].option.selectedOption(false);
            })
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
    }
    /**
     * 关闭多选标签
     */
    closeTag (option: any) {
        const index = this.selectedList.indexOf(option)
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
    }
    _setIptHeight () {
        if (this.$refs.tags) {
            let h = (this.$refs.tags as any).offsetHeight;
            this.iptHeight = h > 38 ? h : 38;
        } else {
            this.iptHeight = 38;
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
        padding: 0 38px 0 20px;
        border: 1px solid $borderColor;
        background-color: $white;
        border-radius: 2px;
        position: relative;
        cursor: pointer;
        .mj-select--icons{
            position: absolute;
            right: 0;
            width: 38px;
            top: 0;
            height: 100%;
            text-align: center;
            [class*=" mj-icon-"],[class^="mj-icon-"]{
                position: absolute;
                top: 50%;
                margin-top: -8px;
                left: 11px;
            }
        }
        &.mj-select--open{
            border-color: $blue;
        }
        .mj-select--tags{
            position: absolute;
            left: 0;
            top: 0;
            padding-top: 7px;
            .mj-tag{
                margin-bottom: 7px;
                margin-left: 7px;
            }
        }
        input{
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
