<template>
    <div></div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop, Provide } from 'vue-property-decorator';
@Component
export default class MjRadioGroup extends Vue{
    @Prop({
        validator: (val) => {
            return typeof val === "string" || typeof val === "boolean" || typeof val === "number";
        },
        required: true
    })
    value!: string | number | boolean;
    @Provide()
    radioValue: string | number | boolean = this.value;
    @Provide()
    setRadioValue(val: string | number | boolean) {
        this.$emit("input", val);
    }
}
</script>
<style lang="scss" scoped>

</style>
