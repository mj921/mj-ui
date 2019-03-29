<template>
    <div>
        <div class="mj-page-title1">Layout 布局</div>
        <mj-code title="基础用法" describe="基础的布局用法" :code="code1">
            <mj-row>
                <mj-col><div class="col"></div></mj-col>
                <mj-col :span="12"><div class="col"></div></mj-col>
                <mj-col :span="12"><div class="col"></div></mj-col>
                <mj-col :span="8"><div class="col"></div></mj-col>
                <mj-col :span="8"><div class="col"></div></mj-col>
                <mj-col :span="8"><div class="col"></div></mj-col>
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
            </mj-row>
        </mj-code>
        <mj-code title="分栏间隔" describe="存在间隔" :code="code2">
            <mj-row :gutter="20">
                <mj-col><div class="col"></div></mj-col>
                <mj-col :span="12"><div class="col"></div></mj-col>
                <mj-col :span="12"><div class="col"></div></mj-col>
                <mj-col :span="8"><div class="col"></div></mj-col>
                <mj-col :span="8"><div class="col"></div></mj-col>
                <mj-col :span="8"><div class="col"></div></mj-col>
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
            </mj-row>
        </mj-code>
        <mj-code title="分栏偏移" describe="分栏偏移" :code="code2">
            <mj-row :gutter="20">
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="6" :offset="3"><div class="col"></div></mj-col>
                <mj-col :span="6" :offset="3"><div class="col"></div></mj-col>
                <mj-col :span="6"><div class="col"></div></mj-col>
                <mj-col :span="4" :offset="2"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
                <mj-col :span="4"><div class="col"></div></mj-col>
            </mj-row>
        </mj-code>
        <div class="mj-page-title2">Row 属性</div>
        <mj-api-table :data="rowAttr"></mj-api-table>
        <div class="mj-page-title2">Col 属性</div>
        <mj-api-table :data="colAttr"></mj-api-table>
    </div>
</template>
<script>
import Vue from 'vue'
import codeJson from '@/docCodes/layout';

export default {
    name: "LayoutPage",
    data () {
        return {
            code1: codeJson.code1,
            code2: codeJson.code2,
            code3: codeJson.code3,
            rowAttr: [
                {
                    prop: "gutter",
                    desc: "栅格间隔",
                    type: "number",
                    optional: "—",
                    defaultVal: "0"
                }
            ],
            colAttr: [
                {
                    prop: "span",
                    desc: "栅格占据列数",
                    type: "number",
                    optional: "—",
                    defaultVal: "24"
                }, {
                    prop: "offset",
                    desc: "栅格左侧间隔列数",
                    type: "number",
                    optional: "—",
                    defaultVal: "0"
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .mj-row{
        .mj-col{
            .col{
                margin-bottom: 20px;
                height: 30px;
                background-color: #b1afaf;
                border-radius: 5px;
            }
            &:nth-child(even){
                .col{
                    background-color: #d3d2d2;
                }
            }
        }
    }
</style>
