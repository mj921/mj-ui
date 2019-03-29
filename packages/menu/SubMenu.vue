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
<script>
export default {
    name: "MjSubMenu",
    data () {
        return {
            items: {}
        }
    },
    methods: {
        addItem(item) {
            this.$set(this.items, item.index, item);
        },
        removeItem (item) {
            delete this.items[item.index];
        }
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
    }
}
</style>
