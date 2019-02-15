<template>
    <div class="mj-table">
        <table>
            <thead>
                <tr>
                    <th
                        v-for="(column, i) in columnList"
                        :key="i"
                        :style="{
                            'width': column.width,
                            'min-width': column.minWidth,
                            'text-align': column.align
                        }">{{column.label}}</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="data && data.length > 0">
                    <tr v-for="(row, i) in data" :key="'tr' + i">
                        <template v-for="(column, j) in columnList">
                            <td
                                :key="'tr' + i + ',td' + j"
                                :style="{
                                    'text-align': column.align
                                }">
                                <div v-if="column.$slot">
                                    {{column.$slot}}
                                </div>
                                <div v-else>
                                    {{column.formatter ? column.formatter(row, i) : row[column.prop]}}
                                </div>
                            </td>
                        </template>
                    </tr>
                </template>
                <tr v-else>
                    <td class="mj-table--empty" :colspan="columnList.length">{{emptyText}}</td>
                </tr>
            </tbody>
        </table>
        <div class="mj-table--hidden-column"><slot></slot></div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop, Provide } from 'vue-property-decorator';
import MjTableColumn from '@/components/tableColumn';

@Component
export default class MjTable extends Vue {
    @Prop({type: Array, required: true})
    data!: Object[];
    @Prop({type: String, default: "暂无数据"})
    emptyText!: string;
    @Provide()
    addColumn(column: MjTableColumn) {
        this.columnList.push(column);
    }
    columnList: MjTableColumn[] = [];
}
</script>
<style lang="scss" scoped>
.mj-table{
    table{
        table-layout:fixed;
        width: 100%;
        border-collapse: collapse;
        tr{
            border-bottom: 1px solid $borderColor;
            td,th{
                padding: 15px;
                line-height: 20px;
                font-size: 14px;
                color: $black;
                text-align: left;
            }
        }
        tbody{
            tr{
                &:hover{
                    background-color: $lightGray;
                }
                td{
                    &.mj-table--empty{
                        text-align: center;
                        line-height: 60px;
                        &:hover{
                            background-color: $white;
                        }
                    }
                }
            }
        }
    }
    .mj-table--hidden-column{
        display: none;
    }
}
</style>
