<template>
    <div></div>
</template>
<script>
export default {
    name: "MjTableColumn",
    props: {
        prop: String,
        label: String,
        width: String,
        minWidth: String,
        align: {
            type: String,
            default: "left"
        },
        formatter: Function
    },
    inject: ["addColumn"],
    created() {
        this.addColumn && this.addColumn(this);
    }
}
</script>
<style lang="scss" scoped>

</style>
