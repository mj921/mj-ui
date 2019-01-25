<template>
    <div>
        <div class="mj-page-title1">Radio 单选框</div>
        <div class="mj-page-title2">基础用法</div>
        <div class="mj-page-direction">基础的单选框用法</div>
        <mj-radio v-model="radio1" label="1">1</mj-radio>
        <mj-radio v-model="radio1" label="2">2</mj-radio>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class RadioPage extends Vue {
    radio1 = "";
}
</script>
<style lang="scss" scoped>

</style>
