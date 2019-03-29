<template>
    <div>
        <input type="text" />
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator';
@Component
export default class MjInput extends Vue {
    @Prop({type: String, default: ""})
    value!: String;
}
</script>
<style lang="scss" scoped>

</style>
