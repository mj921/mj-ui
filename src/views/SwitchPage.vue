<template>
    <div>
        <div class="mj-page-title1">Switch 开关</div>
        <div class="mj-page-title2">基础用法</div>
        <div class="mj-page-direction">基础的单选框用法</div>
        <mj-switch v-model="switch1"></mj-switch>
        <div class="mj-page-title2">文字描述</div>
        <!-- <div class="mj-page-direction">基础的单选框用法</div> -->
        <mj-switch v-model="switch2" notActiveText="关闭" activeText="打开"></mj-switch>
        <div class="mj-page-title2">禁用</div>
        <!-- <div class="mj-page-direction">基础的单选框用法</div> -->
        <mj-switch v-model="switch3" disabled></mj-switch>
        <div class="mj-page-title2">自定义背景色</div>
        <!-- <div class="mj-page-direction">基础的单选框用法</div> -->
        <mj-switch v-model="switch4" notActiveColor="#123456" activeColor="#836e90"></mj-switch>
        <div class="mj-page-title2">Switch 属性</div>
        <mj-api-table :data="radioAttr"></mj-api-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class RadioPage extends Vue {
    switch1 = true;
    switch2 = "打开";
    switch3 = true;
    switch4 = true;
    radioAttr = [{
        prop: "value / v-model",
        desc: "绑定值",
        type: "string | number | boolean",
        optional: "—",
        defaultVal: "true"
    }, {
        prop: "disabled",
        desc: "是否禁用",
        type: "string | boolean",
        optional: "—",
        defaultVal: "false"
    }, {
        prop: "notActiveText",
        desc: "switch 关闭时的值",
        type: "string",
        optional: "—",
        defaultVal: "''"
    }, {
        prop: "activeText",
        desc: "switch 打开时的值",
        type: "string",
        optional: "—",
        defaultVal: "''"
    }, {
        prop: "notActiveValue",
        desc: "switch 关闭时的值",
        type: "number",
        optional: "—",
        defaultVal: "0"
    }, {
        prop: "activeValue",
        desc: "switch 打开时的值",
        type: "number",
        optional: "—",
        defaultVal: "0"
    }, {
        prop: "notActiveColor",
        desc: "switch 关闭时的背景色",
        type: "string",
        optional: "—",
        defaultVal: "#ee3e3e"
    }, {
        prop: "activeColor",
        desc: "switch 打开时的背景色",
        type: "string",
        optional: "—",
        defaultVal: "#3cf603"
    }]
}
</script>
<style lang="scss" scoped>

</style>
