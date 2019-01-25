<template>
    <div class="mj-menu-item-group">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator';
@Component
export default class MjMenuItemGroup extends Vue {
    @Prop({ type: String })
    title!: string;
}
</script>
<style lang="scss">

</style>
