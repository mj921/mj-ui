<template>
    <div class="mj-page">
        <div class="mj-page-title1">Table 表格</div>
        <div class="mj-page-title2">基础用法</div>
        <div class="mj-page-direction">基础的表格用法</div>
        <mj-table :data="data1">
            <mj-table-column prop="prop" label="参数" width="100px"></mj-table-column>
            <mj-table-column prop="desc" label="说明" width="200px"></mj-table-column>
            <mj-table-column prop="type" label="类型" width="100px"></mj-table-column>
            <mj-table-column prop="optional" label="可选值" width="200px"></mj-table-column>
            <mj-table-column prop="defaultVal" label="默认值" width="100px"></mj-table-column>
        </mj-table>
        <mj-code>
            <pre v-pre>
                <div>{{123}}</div>
            </pre>
        </mj-code>
        <div class="mj-page-title2">自定义列内容</div>
        <div class="mj-page-direction">formatter自定义格式化方法</div>
        <mj-table :data="data2">
            <mj-table-column prop="width" label="宽" width="100px"></mj-table-column>
            <mj-table-column prop="height" label="高" width="100px"></mj-table-column>
            <mj-table-column prop="area" label="面积" width="100px" :formatter="fmt"></mj-table-column>
        </mj-table>
        <div class="mj-page-title2">列表为空</div>
        <div class="mj-page-direction">列表为空时列表展示</div>
        <mj-table :data="[]">
            <mj-table-column prop="width" label="宽" width="100px"></mj-table-column>
            <mj-table-column prop="height" label="高" width="100px"></mj-table-column>
            <mj-table-column prop="area" label="面积" width="100px" :formatter="fmt"></mj-table-column>
        </mj-table>
        <div class="mj-page-title2">Table 属性</div>
        <mj-api-table :data="tableAttr"></mj-api-table>
        <div class="mj-page-title2">TableColumn 属性</div>
        <mj-api-table :data="tableColumnAttr"></mj-api-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class TablePage extends Vue {
    data1 = [
        {
            prop: "type",
            desc: "按钮类型",
            type: "string",
            optional: "primary | danger | warning | text",
            defaultVal: "—"
        }, {
            prop: "size",
            desc: "按钮大小",
            type: "string",
            optional: "medium | small | mini",
            defaultVal: "—"
        }, {
            prop: "disabled",
            desc: "是否禁用",
            type: "string | boolean",
            optional: "—",
            defaultVal: "false"
        }
    ]
    data2 = [
        {
            width: 100,
            height: 200
        }
    ]
    fmt(row:any, index:number) {
        return row.width * row.height;
    }
    tableAttr = [
        {
            prop: "data",
            desc: "表格数据",
            type: "object[]",
            optional: "—",
            defaultVal: "—"
        }, {
            prop: "empty-text",
            desc: "数据为空时显示的文字",
            type: "string",
            optional: "—",
            defaultVal: "暂无数据"
        }
    ]
    tableColumnAttr = [
        {
            prop: "prop",
            desc: "列属性名",
            type: "string",
            optional: "—",
            defaultVal: "—"
        }, {
            prop: "label",
            desc: "列名",
            type: "string",
            optional: "—",
            defaultVal: "—"
        }, {
            prop: "width",
            desc: "列宽度",
            type: "string",
            optional: "—",
            defaultVal: "—"
        }, {
            prop: "min-width",
            desc: "列最小宽度",
            type: "string",
            optional: "—",
            defaultVal: "—"
        }, {
            prop: "formatter",
            desc: "自定义格式化方法(row 这一行的数据 index 这一行的索引， 返回字符串)",
            type: "(row, index) => string",
            optional: "—",
            defaultVal: "—"
        }
    ]
}
</script>
<style lang="scss" scoped>

</style>
