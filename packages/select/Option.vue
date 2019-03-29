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
<script>
export default{
    name: "MjOption",
    props: {
        label: String,
        value: {
            validator: function(value) {
                return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
            },
            required: true
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    inject: ["addOption", "selectOption"],
    data () {
        return {
            selected: false,
            option: {}
        }
    },
    methods: {
        handleClick (e) {
            e.stopPropagation();
            if (!this.disabled) {
                this.selectOption(this.option);
            }
        },
        selectedOption (selected) {
            this.selected = selected;
        }
    },
    created () {
        this.option = {value: this.value, label: this.label || this.value, option: this};
        this.addOption(this.option);
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
