<template>
    <div>
        <div class="mj-page-title1">Select 下拉框</div>
        <mj-code title="基础用法" :code="code1">
            <mj-select v-model="select1">
                <mj-option v-for="item in options1" :value="item.value" :label="item.label" :key="item.value"></mj-option>
            </mj-select>
        </mj-code>
        <mj-code title="禁用" :code="code2">
            <mj-select v-model="select2" disabled>
                <mj-option v-for="item in options1" :value="item.value" :label="item.label" :key="item.value"></mj-option>
            </mj-select>
        </mj-code>
        <mj-code title="选项禁用" :code="code3">
            <mj-select v-model="select3">
                <mj-option v-for="item in options3" :value="item.value" :label="item.label" :key="item.value" :disabled="item.disabled"></mj-option>
            </mj-select>
        </mj-code>
        <mj-code title="多选" :code="code4">
            <mj-select v-model="select4" multiple>
                <mj-option v-for="item in options4" :value="item.value" :label="item.label" :key="item.value"></mj-option>
            </mj-select>
        </mj-code>
        <mj-code title="可清空选项值" :code="code5">
            <mj-select v-model="select5" clearabled>
                <mj-option v-for="item in options5" :value="item.value" :label="item.label" :key="item.value"></mj-option>
            </mj-select>
        </mj-code>
        <div class="mj-page-title2">Select 属性</div>
        <mj-api-table :data="selectAttr"></mj-api-table>
        <div class="mj-page-title2">Select 事件</div>
        <mj-api-table :data="selectEvent" type="event"></mj-api-table>
        <div class="mj-page-title2">Option 属性</div>
        <mj-api-table :data="optionAttr"></mj-api-table>
    </div>
</template>
<script>
import codeJson from '@/docCodes/select';

export default {
    name: "SelectPage",
    data () {
        return {
            select1: "",
            options1: [{
                value: 1,
                label: "香蕉"
            }, {
                value: 2,
                label: "橘子"
            }, {
                value: 3,
                label: "苹果"
            }, {
                value: 4,
                label: "西瓜"
            }],
            select2: "",
            select3: "",
            options3: [{
                value: 1,
                label: "香蕉"
            }, {
                value: 2,
                label: "橘子",
                disabled: true
            }, {
                value: 3,
                label: "苹果"
            }, {
                value: 4,
                label: "西瓜"
            }],
            select4: "",
            options4: [{
                value: 1,
                label: "香蕉"
            }, {
                value: 2,
                label: "橘子"
            }, {
                value: 3,
                label: "苹果"
            }, {
                value: 4,
                label: "西瓜"
            }],
            select5: "",
            options5: [{
                value: 1,
                label: "香蕉"
            }, {
                value: 2,
                label: "橘子"
            }, {
                value: 3,
                label: "苹果"
            }, {
                value: 4,
                label: "西瓜"
            }],
            code1: codeJson.code1,
            code2: codeJson.code2,
            code3: codeJson.code3,
            code4: codeJson.code4,
            code5: codeJson.code5,
            selectAttr: [{
                prop: "value | v-model",
                desc: "绑定值",
                type: "string | number | boolean | array",
                optional: "—",
                defaultVal: "—"
            }, {
                prop: "disabled",
                desc: "是否禁用",
                type: "boolean",
                optional: "true | false",
                defaultVal: "false"
            }, {
                prop: "multiple",
                desc: "是否多选",
                type: "boolean",
                optional: "true | false",
                defaultVal: "false"
            }, {
                prop: "clearabled",
                desc: "是否可清空选项值",
                type: "boolean",
                optional: "true | false",
                defaultVal: "false"
            }],
            selectEvent: [{
                event: "change",
                desc: "选中值变化事件时触发",
                callback: "之前选中值，当前选中值"
            }],
            optionAttr: [{
                prop: "value",
                desc: "选项值",
                type: "string | number | boolean",
                optional: "—",
                defaultVal: "—"
            }, {
                prop: "label",
                desc: "选项内容",
                type: "string",
                optional: "—",
                defaultVal: "—"
            }]
        }
    }
}
</script>

