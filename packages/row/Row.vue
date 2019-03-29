<template>
    <div class="mj-row"><slot></slot></div>
</template>
<script>
export default {
    name: "MjRow",
    props: {
        gutter: {
            type: Number,
            default: 0
        }
    },
    provide () {
        return {
            rowGutter: this.gutter
        }
    }
}
</script>
<style lang="scss" scoped>
.mj-row{
    @include box-sizing(border-box);
    overflow: hidden;
}
</style>
