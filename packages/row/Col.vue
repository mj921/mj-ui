<template>
    <div class="mj-col"
        :class="'mj-col--' + span"
        :style="{
            'padding': '0 ' + rowGutter / 2 + 'px',
            'marginLeft': 100 / 24 * offset + '%'
        }">
        <div class="mj-col--content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "MjCol",
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    inject: ["rowGutter"]
}
</script>
<style lang="scss" scoped>
    .mj-col{
        float: left;
        @include box-sizing(border-box);
        @for $i from 1 through 24 {
            &.mj-col--#{$i} {
                width: 100% / 24 * $i;
            }
        }
    }
</style>
