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
                            'min-width': column.minWidth
                        }">{{column.label}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, i) in data" :key="'tr' + i">
                    <td v-for="(column, j) in columnList" :key="'tr' + i + ',td' + j">{{row[column.prop]}}</td>
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
    }
    .mj-table--hidden-column{
        display: none;
    }
}
</style>
