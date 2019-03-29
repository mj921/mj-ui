<template>
    <div>
        <div class="mj-page-title1">Switch 开关</div>
        <mj-code title="基础用法" describe="基础的单选框用法" :code="code1">
            <mj-switch v-model="switch1"></mj-switch>
        </mj-code>
        <mj-code title="文字描述" :code="code2">
            <mj-switch v-model="switch2" notActiveText="关闭" activeText="打开"></mj-switch>
        </mj-code>
        <mj-code title="禁用" :code="code3">
            <mj-switch v-model="switch3" disabled></mj-switch>
        </mj-code>
        <mj-code title="自定义背景色" :code="code4">
            <mj-switch v-model="switch4" notActiveColor="#123456" activeColor="#836e90"></mj-switch>
        </mj-code>
        <div class="mj-page-title2">Switch 属性</div>
        <mj-api-table :data="switchAttr"></mj-api-table>
    </div>
</template>
<script>
import codeJson from '@/docCodes/switch';

export default {
    name: "SwitchPage",
    data () {
        return {
            switch1: true,
            switch2: "打开",
            switch3: true,
            switch4: true,
            code1: codeJson.code1,
            code2: codeJson.code2,
            code3: codeJson.code3,
            code4: codeJson.code4,
            switchAttr: [{
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
    }
}
</script>
<style lang="scss" scoped>

</style>
