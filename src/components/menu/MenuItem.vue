<template>
    <div class="mj-menu-item" :class="{'mj-menu-item__actived': actived}" @click="_handleClick">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Inject, Component } from 'vue-property-decorator';
import MjMenu from '@/components/menu/Menu.vue';
import MjSubMenu from '@/components/menu/SubMenu.vue';
@Component
export default class MjMenuItem extends Vue {
    actived: boolean = false;
    @Prop({ type: String })
    index!: string;
    @Inject()
    rootMenu!: MjMenu;
    @Inject()
    setActived!: (actived: string) => void;
    _handleClick() {
        this.setActived(this.index);
        this.$emit("click");
    }
    _setActived(flag: boolean) {
        this.actived = flag;
    }
    mounted() {
        this.rootMenu && this.rootMenu.addItem(this);
        this.parentMenu && this.parentMenu.addItem(this);
    }
    get parentMenu(): MjMenu | MjSubMenu {
        let parent: MjMenu | MjSubMenu = this.$parent as MjMenu | MjSubMenu;
        while(parent && ["MjMenu", "MjSubMenu"].indexOf(parent.$options.name as string) === -1) {
            parent = parent.$parent as MjMenu | MjSubMenu;
        }
        return parent;
    }
}
</script>
<style lang="scss">
.mj-menu-item{
    padding-left: 20px;
    &:hover{
        color: $blue;
    }
    &.mj-menu-item__actived{
        color: $blue;
    }
}
</style>