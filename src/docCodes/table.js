export default {
    code1: `
        <template>
            <mj-table :data="data1">
                <mj-table-column prop="prop" label="参数" width="100px"></mj-table-column>
                <mj-table-column prop="desc" label="说明" width="200px"></mj-table-column>
                <mj-table-column prop="type" label="类型" width="100px"></mj-table-column>
                <mj-table-column prop="optional" label="可选值" width="200px"></mj-table-column>
                <mj-table-column prop="defaultVal" label="默认值" width="100px"></mj-table-column>
            </mj-table>
        </template>
        <script>
            export default {
                data () {
                    return {
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
                        }
                    ]
                }
            }
        <\/script>
    `,
    code2: `
        <template>
            <mj-table :data="data2">
                <mj-table-column prop="width" label="宽" width="100px"></mj-table-column>
                <mj-table-column prop="height" label="高" width="100px"></mj-table-column>
                <mj-table-column prop="area" label="面积" width="100px" :formatter="fmt"></mj-table-column>
            </mj-table>
        </template>
        <script>
            export default {
                data () {
                    return {
                        data2 = [
                            {
                                width: 100,
                                height: 200
                            }
                        }
                    ]
                }
            }
        <\/script>
    `,
    code3: `
        <template>
            <mj-table :data="data3">
                <mj-table-column prop="width" label="宽" width="100px"></mj-table-column>
                <mj-table-column prop="height" label="高" width="100px"></mj-table-column>
                <mj-table-column prop="area" label="面积" width="100px" :formatter="fmt"></mj-table-column>
            </mj-table>
        </template>
        <script>
            export default {
                data () {
                    return {
                        data3: []
                    }
                }
            }
        <\/script>
    `,
    code4: `
        <template>
            <mj-table :data="data4">
                <mj-table-column prop="width" label="宽" width="100px"></mj-table-column>
                <mj-table-column prop="height" label="高" width="100px"></mj-table-column>
                <mj-table-column prop="area" label="面积" width="100px">
                    <template v-slot="row">
                        {{row.height * row.width}}
                    </template>
                </mj-table-column>
            </mj-table>
        </template>
        <script>
            export default {
                data () {
                    return {
                        data4 = [
                            {
                                width: 100,
                                height: 200
                            }
                        }
                    ]
                }
            }
        <\/script>
    `
}