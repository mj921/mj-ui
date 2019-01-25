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
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop, Inject } from 'vue-property-decorator';
@Component
export default class MjCol extends Vue{
    @Prop({type: Number, default: 24})
    span!: number;
    @Prop({type: Number, default: 0})
    offset!: number;
    @Inject()
    rowGutter!: number;
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
