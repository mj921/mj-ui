<template>
    <div>
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
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class ButtonPage extends Vue {}
</script>
<style lang="scss" scoped>

</style>
