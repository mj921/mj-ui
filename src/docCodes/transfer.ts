export default {
    code1: `
        <template>
            <div>
                <mj-transfer :data="data1" v-model="value1"></mj-transfer>
            </div>
        </template>
        <script>
            export default {
                data () {
                    return {
                        data1 = [{
                            key: "key1",
                            label: "key1"
                        }, {
                            key: "key2",
                            label: "key2",
                            disabled: true
                        }, {
                            key: "key3",
                            label: "key3"
                        }, {
                            key: "key4",
                            label: "key4"
                        }];
                        value1 = [1];
                    }
                }
            }
        <\/script>
    `
} as {
    [key: string]: string
}