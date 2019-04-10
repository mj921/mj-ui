<template>
    <div class="mj-checkbox" :class="{'mj-checkbox--checked': checked}" @click="handleClick" @selectstart="handleSelect">
        <i :class="{'mj-icon-close': checked}"></i>
        <span @selectstart="handleSelect">{{label}}</span>
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
        }
    },
    methods: {
        handleClick () {
            this.$emit("change", !this.checked);
        },
        handleSelect () {
            return false;
        }
    }
}
</script>
<style lang="scss" scoped>
.mj-checkbox{
    display: inline-block;
    overflow: hidden;
    -moz-user-select: none;
    i{
        float: left;
        display: block;
        width: 12px;
        height: 12px;
        border: 1px solid $borderColor;
        border-radius: 2px;
        background-color: $white;
    }
    span{
        margin-left: 10px;
        float: left;
        font-size: 14px;
        line-height: 14px;
        color: $black;
    }
    &+.mj-checkbox{
        margin-left: 20px;
    }
    &.mj-checkbox--checked{
        i{
            background-color: $blue;
            border-color: $blue;
            text-align: center;
            color: $white;
            line-height: 12px;
        }
    }
}
</style>
