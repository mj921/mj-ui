<template>
    <div class="mj-transfer">
        <div class="mj-transfer--left">
            <dt class="mj-transfer--title">{{titles && titles.length > 0 ? titles[0] : "列表1"}}</dt>
            <div class="mj-transfer--list">
                <template v-for="item in list">
                    <dl
                        v-if="item.type === 'left'"
                        :class="{'mj-transfer--active': item.active}"
                        :key="item.key"
                        @click="selectItem(item)">
                        {{item.label}}
                    </dl>
                </template>
            </div>
        </div>
        <div class="mj-transfer--button">
            <button @click="moveLeft">&lt;</button><br/>
            <button @click="moveRight">&gt;</button>
        </div>
        <div class="mj-transfer--right">
            <dt class="mj-transfer--title">{{titles && titles.length > 1 ? titles[0] : "列表1"}}</dt>
            <div class="mj-transfer--list">
                <template v-for="item in list">
                    <dl
                        v-if="item.type === 'right'"
                        :class="{
                            'mj-transfer--active': item.active,
                            'mj-transfer--disabled': item.disabled
                        }"
                        :key="item.key"
                        @click="selectItem(item)">
                        {{item.label}}
                    </dl>
                </template>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

interface TransferItem {
    key: string,
    label: string,
    disabled: boolean,
    data: Object,
    type: string,
    active: boolean
}

@Component
export default class MjTransfer extends Vue{
    @Prop({type: Array})
    data!: {key: string, label: string, disabled: boolean}[];
    @Prop({type: Array})
    value!: number[];
    @Prop({type: Array})
    titles!: string[];
    list: TransferItem[] = [];
    initList() {
        this.list = this.data.map((item, i) => {
            return {
                key: item.key,
                label: item.label,
                disabled: !!item.disabled,
                data: item,
                type: this.value.indexOf(i) > -1 ? "right" : "left",
                active: false
            }
        })
    }
    selectItem(item: TransferItem) {
        if (!item.disabled) {
            item.active = !item.active;
        }
    }
    moveRight() {
        this.list.forEach(item => {
            if (item.type === "left" && item.active) {
                item.type = "right";
                item.active = false;
            }
        })
    }
    moveLeft() {
        this.list.forEach(item => {
            if (item.type === "right" && item.active) {
                item.type = "left";
                item.active = false;
            }
        })
    }
    created() {
        this.initList();
    }
}
</script>
<style lang="scss" scoped>
    .mj-transfer{
        text-align: center;
        overflow: hidden;
        color: $black;
        .mj-transfer--left,.mj-transfer--right{
            display: inline-block;
            width: 200px;
            border: 1px solid $borderColor;
            @include box-sizing(border-box);
            vertical-align: top;
            text-align: left;
            border-radius: 5px;
            .mj-transfer--title{
                padding-left: 20px;
                border-bottom: 1px solid $borderColor;
                height: 40px;
                line-height: 40px;
                background-color: #f5f7fa;
            }
            .mj-transfer--list{
                padding: 20px 0;
                height: 300px;
                overflow-y: auto;
                overflow-x: hidden;
                dl{
                    padding-left: 20px;
                    line-height: 30px;
                    cursor: default;
                    &.mj-transfer--active{
                        color: $blue;
                    }
                    &.mj-transfer--disabled{
                        color: $disabled;
                        cursor: not-allowed;
                    }
                }
            }
        }
        .mj-transfer--button{
            margin-top: 120px;
            display: inline-block;
            vertical-align: middle;
            width: 80px;
            text-align: center;
            button{
                margin: 5px auto;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 1px solid $borderColor;
                background-color: transparent;
                font-size: 24px;
                cursor: pointer;
                outline: none;
                color: $textColor;
            }
        }
    }
</style>

