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
        <div class="mj-page-title2">Select 属性</div>
        <mj-api-table :data="selectAttr"></mj-api-table>
        <div class="mj-page-title2">Option 属性</div>
        <mj-api-table :data="optionAttr"></mj-api-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import codeJson from '@/docCodes/select';

@Component
export default class SelectPage extends Vue{
    select1 = "";
    options1 = [{
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
    }]
    select2 = "";
    select3 = "";
    options3 = [{
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
    }]
    code1 = codeJson.code1;
    code2 = codeJson.code2;
    code3 = codeJson.code3;
    selectAttr = [{
        prop: "value | v-model",
        desc: "绑定值",
        type: "string | number | boolean",
        optional: "—",
        defaultVal: "''"
    }, {
        prop: "disabled",
        desc: "是否禁用",
        type: "boolean",
        optional: "true | false",
        defaultVal: "false"
    }]
    optionAttr = [{
        prop: "value",
        desc: "选项值",
        type: "string | number | boolean",
        optional: "—",
        defaultVal: "''"
    }, {
        prop: "label",
        desc: "选项内容",
        type: "string",
        optional: "—",
        defaultVal: "''"
    }]
}
</script>

