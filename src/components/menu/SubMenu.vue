<template>
    <div class="mj-sub-menu">
        <div class="mj-sub-menu__title">
            <slot name="title"></slot>
        </div>
        <div class="mj-sub-menu__content">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';
import MjMenuItem from '@/components/menu/MenuItem.vue';
@Component
export default class MjSubMenu extends Vue {
    items: {[key: string]: MjMenuItem} = {};
    addItem(item: MjMenuItem) {
        this.$set(this.items, item.index, item);
    }
    removeItem(item: MjMenuItem) {
        delete this.items[item.index];
    }
}
</script>
<style lang="scss">
.mj-sub-menu{
    padding: 0 20px;
    .mj-sub-menu__title{
        height: 56px;
        line-height: 56px;
        font-size: 18px;
        color: $black;
        font-weight: bold;
        cursor: default;
        &:hover{
            color: $blue;
        }
    }
    .mj-sub-menu__content{
        line-height: 50px;
        font-size: 14px;
        color: #383737;
        cursor: default;
        &:hover{
            color: $blue;
        }
    }
}
</style>
