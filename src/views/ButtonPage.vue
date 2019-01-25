<template>
    <div class="mj-page">
        <div class="mj-page-title1">Button 按钮</div>
        <div class="mj-page-title2">基础用法</div>
        <div class="mj-page-direction">基础的按钮用法</div>
        <mj-button>默认按钮</mj-button>
        <mj-button type="primary">主要按钮</mj-button>
        <mj-button type="danger">危险按钮</mj-button>
        <mj-button type="warning">警告按钮</mj-button>
        <mj-button type="text">文字按钮</mj-button>
        <mj-code>
            <!-- <mj-button type="primary">主要</mj-button> -->
        </mj-code>
        <div class="mj-page-title2">禁用状态</div>
        <div class="mj-page-direction">按钮的禁用状态</div>
        <mj-button disabled>默认按钮</mj-button>
        <mj-button type="primary" disabled>主要按钮</mj-button>
        <mj-button type="danger" disabled>危险按钮</mj-button>
        <mj-button type="warning" disabled>警告按钮</mj-button>
        <mj-button type="text" disabled>文字按钮</mj-button>
        <div class="mj-page-title2">不同尺寸</div>
        <div class="mj-page-direction">不同尺寸的按钮</div>
        <mj-button type="primary">默认大小</mj-button>
        <mj-button type="primary" size="medium">中等大小</mj-button>
        <mj-button type="primary" size="small">小型按钮</mj-button>
        <mj-button type="primary" size="mini">迷你按钮</mj-button>
        <div class="mj-page-title2">Button 属性</div>
        <mj-api-table :data="buttonAttr"></mj-api-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class ButtonPage extends Vue {
    buttonAttr = [
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
}
</script>
<style lang="scss" scoped>

</style>
