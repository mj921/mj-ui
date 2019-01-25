<template>
    <div>
        <mj-table :data="data">
            <mj-table-column prop="prop" label="参数" width="100px"></mj-table-column>
            <mj-table-column prop="desc" label="说明" width="200px"></mj-table-column>
            <mj-table-column prop="type" label="类型" width="100px"></mj-table-column>
            <mj-table-column prop="optional" label="可选值" width="200px"></mj-table-column>
            <mj-table-column prop="defaultVal" label="默认值" width="100px"></mj-table-column>
        </mj-table>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator';

interface ApiData {
    prop: string,
    desc: string,
    type: string,
    optional: string,
    defaultVal: string
}

@Component
export default class ApiTable extends Vue{
    @Prop({type: Array})
    data!: ApiData[];
}
</script>

