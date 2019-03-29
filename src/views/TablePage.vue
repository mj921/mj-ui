<template>
    <div class="mj-page">
        <div class="mj-page-title1">Table 表格</div>
        <mj-code title="基础用法" describe="基础的表格用法" :code="code1">
            <mj-table :data="data1">
                <mj-table-column prop="prop" label="参数" width="100px"></mj-table-column>
                <mj-table-column prop="desc" label="说明" width="200px"></mj-table-column>
                <mj-table-column prop="type" label="类型" width="100px"></mj-table-column>
                <mj-table-column prop="optional" label="可选值" width="200px"></mj-table-column>
                <mj-table-column prop="defaultVal" label="默认值" width="100px"></mj-table-column>
            </mj-table>
        </mj-code>
        <mj-code title="自定义列内容" describe="formatter自定义格式化方法" :code="code2">
            <mj-table :data="data2">
                <mj-table-column prop="width" label="宽" width="100px"></mj-table-column>
                <mj-table-column prop="height" label="高" width="100px"></mj-table-column>
                <mj-table-column prop="area" label="面积" width="100px" :formatter="fmt"></mj-table-column>
            </mj-table>
        </mj-code>
        <mj-code title="列表为空" describe="列表为空时列表展示" :code="code3">
            <mj-table :data="[]">
                <mj-table-column prop="width" label="宽" width="100px"></mj-table-column>
                <mj-table-column prop="height" label="高" width="100px"></mj-table-column>
                <mj-table-column prop="area" label="面积" width="100px" :formatter="fmt"></mj-table-column>
            </mj-table>
        </mj-code>
        <mj-code title="slot插槽" describe="slot插槽" :code="code4">
            <mj-table :data="data2">
                <mj-table-column prop="width" label="宽" width="100px"></mj-table-column>
                <mj-table-column prop="height" label="高" width="100px"></mj-table-column>
                <mj-table-column prop="area" label="面积" width="100px">
                    <template v-slot="row">
                        {{row.height * row.width}}
                    </template>
                </mj-table-column>
            </mj-table>
        </mj-code>
        <div class="mj-page-title2">Table 属性</div>
        <mj-api-table :data="tableAttr"></mj-api-table>
        <div class="mj-page-title2">TableColumn 属性</div>
        <mj-api-table :data="tableColumnAttr"></mj-api-table>
    </div>
</template>
<script>
import codeJson from '@/docCodes/table';

export default {
    name: "TablePage",
    data () {
        return {
            data1: [
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
            ],
            data2: [
                {
                    width: 100,
                    height: 200
                }
            ],
            code1: codeJson.code1,
            code2: codeJson.code2,
            code3: codeJson.code3,
            code4: codeJson.code4,
            tableAttr: [
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
            ],
            tableColumnAttr: [
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
    },
    methods: {
        fmt(row, index) {
            return row.width * row.height;
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
