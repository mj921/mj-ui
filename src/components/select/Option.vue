<template>
    <div
        class="mj-option"
        :class="{
            'mj-option--active': selected,
            'mj-option--disabled': disabled
        }"
        @click="handleClick"
    >
        {{label}}
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Component, Inject, Watch } from 'vue-property-decorator';
@Component
export default class MjOption extends Vue {
    @Prop({type: String, default: ""})
    label!: string;
    @Prop({
        validator: function(value) {
            return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
        },
        required: true
    })
    value!: string | boolean | number;
    @Prop({type: Boolean, default: false})
    disabled!: boolean;
    @Inject("addOption")
    addOption!: (option: object) => void;
    @Inject("selectOption")
    selectOption!: (value: any) => void;
    selected = false;
    handleClick (e: Event) {
        e.stopPropagation();
        if (!this.disabled) {
            this.selectOption(this.value);
        }
    }
    selectedOption (selected: boolean) {
        this.selected = selected;
    }
    created () {
        this.addOption({value: this.value, label: this.label || this.value, option: this});
    }
}
</script>
<style lang="scss" scoped>
.mj-option{
    font-size: 14px;
    line-height: 34px;
    padding: 0 20px;
    color: $black;
    background-color: $white;
    cursor: pointer;
    &:hover{
        background-color: $borderColor;
    }
    &.mj-option--disabled{
        color: $textColor;
        cursor: not-allowed;
        &:hover{
            background-color: $white;
        }
    }
    &.mj-option--active{
        color: $blue;
    }
}
</style>
