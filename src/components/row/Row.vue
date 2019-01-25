<template>
    <div class="mj-row"><slot></slot></div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop, Provide } from 'vue-property-decorator';
@Component
export default class MjRow extends Vue{
    @Prop({type: Number, default: 0})
    gutter!: number;
    @Provide()
    rowGutter = this.gutter;
}
</script>
<style lang="scss" scoped>
.mj-row{
    @include box-sizing(border-box);
    overflow: hidden;
}
</style>
