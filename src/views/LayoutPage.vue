<template>
    <div>
        <div class="mj-page-title1">Layout 布局</div>
        <div class="mj-page-title2">基础用法</div>
        <div class="mj-page-direction">基础的布局用法</div>
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
        <div class="mj-page-title2">分栏间隔</div>
        <div class="mj-page-direction">存在间隔</div>
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
        <div class="mj-page-title2">分栏偏移</div>
        <div class="mj-page-direction">分栏偏移</div>
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
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
@Component
export default class LayoutPage extends Vue {}
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
