<template>
    <div class="mj-menu">
        <slot></slot>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Provide, Component, Prop } from 'vue-property-decorator';
import MjMenuItem from '@/components/menu/MenuItem.vue';
@Component
export default class MjMenu extends Vue {
    items: {[key: string]: MjMenuItem} = {};
    actived: string = "";
    @Provide()
    rootMenu = this;
    @Provide()
    rootActived = this.actived;
    @Provide()
    setActived(actived: string) {
        if (this.actived) {
            this.items[this.actived]._setActived(false);
        }
        this.actived = actived;
        if (actived) {
            this.items[actived]._setActived(true);
        }
    }
    @Prop({ type: String })
    defaultActived!: string;
    addItem(item: MjMenuItem) {
        this.$set(this.items, item.index, item);
    }
    removeItem(item: MjMenuItem) {
        delete this.items[item.index];
    }
    mounted() {
        if (this.actived) {
            this.items[this.actived]._setActived(true);
        }
    }
    created() {
        this.actived = this.defaultActived;
    }
}
</script>
<style lang="scss">

</style>