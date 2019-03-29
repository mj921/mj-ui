<template>
    <div></div>
</template>
<script>
export default {
    name: "MjRadioGroup",
    props: {
        value: {
            validator: (val) => {
                return typeof val === "string" || typeof val === "boolean" || typeof val === "number";
            },
            required: true
        }
    },
    provide () {
        return {
            radioValue: this.value,
            setRadioValue: (val) => {
                this.$emit("input", val);
            }
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
