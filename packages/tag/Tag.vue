<template>
    <span
        v-if="!closed"
        class="mj-tag"
        :class="size && 'mj-tag--' + size"
        :style="{'background-color': color, 'border-color': borderColor, 'color': textColor}">
        <slot></slot>
        <i v-if="closeabled" @click="closeHandle" class="mj-icon-close"></i>
    </span>
</template>
<script>
export default {
    name: "MjTag",
    props: {
        closeabled: {
            type: Boolean,
            default: false
        },
        color: String,
        borderColor: String,
        textColor: String,
        size: String
    },
    data () {
        return {
            closed: false
        }
    },
    methods: {
        closeHandle () {
            this.closed = true;
            this.$emit("close");
        }
    }
}
</script>
<style lang="scss" scoped>
.mj-tag{
    display: inline-block;
    font-size: 12px;
    line-height: 30px;
    padding: 0 10px;
    color: $blue;
    border: 1px solid rgba($blue, 0.2);
    border-radius: 5px;
    background-color: rgba($blue, 0.1);
    &+.mj-tag{
        margin-left: 10px;
    }
    &.mj-tag--medium{
        line-height: 26px;
    }
    &.mj-tag--small{
        line-height: 22px;
    }
    &.mj-tag--mini{
        line-height: 18px;
    }
    .mj-icon-close{
        margin-left: 5px;
        display: inline-block;
        font-size: 12px;
        width: 16px;
        height: 16px;
        text-align: center;
        line-height: 16px;
        &:hover{
            border-radius: 50%;
            background-color: $blue;
            color: #fff;
        }
    }
}
</style>
