<template>
    <div>
        <div class="mj-page-title1">Transfer 穿梭框</div>
        <div class="mj-page-title2">基础用法</div>
        <div class="mj-page-direction">基础的穿梭框用法</div>
        <mj-transfer :data="data1" v-model="value1"></mj-transfer>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class TransferPage extends Vue {
    data1 = [{
        key: "key1",
        label: "key1"
    }, {
        key: "key2",
        label: "key2",
        disabled: true
    }, {
        key: "key3",
        label: "key3"
    }, {
        key: "key4",
        label: "key4"
    }];
    value1 = [1]
}
</script>
<style lang="scss" scoped>

</style>
