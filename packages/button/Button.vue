<template>
    <button class="mj-button"
        :class="{
            'mj-button--primary': type === 'primary',
            'mj-button--danger': type === 'danger',
            'mj-button--warning': type === 'warning',
            'mj-button--text': type === 'text',
            'mj-button--disabled': disabled,
            'mj-button--medium': size === 'medium',
            'mj-button--small': size === 'small',
            'mj-button--mini': size === 'mini'
        }"
        @click="_handleClick">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "MjButton",
    props: {
        type: { type: String, default: "" },
        size: { type: String, default: "" },
        disabled: { type: Boolean, default: false }
    },
    methods: {
        _handleClick() {
            if (!this.disabled) {
                this.$emit("click");
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.mj-button{
    margin: 0 12px 20px 0;
    padding: 8px 1em;
    line-height: 1em;
    border: 1px solid $textColor;
    border-radius: 5px;
    font-size: 14px;
    color: $black;
    background-color: $white;
    outline: none;
    cursor: pointer;
    &:hover{
        color: $blue;
        border-color: lighten($blue, 10);
        background-color: lighten($blue, 29);
    }
    @mixin button-type($color) {
        background-color: $color;
        color: $white;
        border-color: $color;
        &:hover{
            background-color: lighten($color, 10);
            border-color: lighten($color, 10);
        }
        &.mj-button--disabled{
            background-color: lighten($color, 29);
            border-color: lighten($color, 29);
            cursor: not-allowed;
        }
    }
    @mixin button-size($font-size, $padTop, $padLeft) {
        font-size: $font-size;
        padding: $padTop $padLeft;
    }
    &.mj-button--disabled{
        color: lighten($black, 52);
        border-color: lighten($textColor, 10);
        background-color: $white;
        cursor: not-allowed;
    }
    &.mj-button--primary{
        @include button-type($blue);
    }
    &.mj-button--danger{
        @include button-type($red);
    }
    &.mj-button--warning{
        @include button-type($yellow);
    }
    &.mj-button--text{
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 0;
        border: none;
        color: $blue;
        &:hover{
            background-color: #fff;
        }
        &.mj-button--disabled{
            color: $disabled;
        }
    }
    &.mj-button--medium{
        @include button-size(13px, 6px, 0.8em);
    }
    &.mj-button--small{
        @include button-size(12px, 5px, 0.7em);
    }
    &.mj-button--mini{
        @include button-size(12px, 4px, 0.6em);
    }
}
</style>
