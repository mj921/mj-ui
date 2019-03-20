export default {
    code1: `
        <template>
            <div>
                <mj-switch v-model="switch1"></mj-switch>
            </div>
        </template>
        <script>
            export default {
                data () {
                    return {
                        switch1 = true;
                    }
                }
            }
        <\/script>
    `,
    code2: `
        <template>
            <div>
                <mj-switch v-model="switch2" notActiveText="关闭" activeText="打开"></mj-switch>
            </div>
        </template>
        <script>
            export default {
                data () {
                    return {
                        switch2 = "打开";
                    }
                }
            }
        <\/script>
    `,
    code3: `
        <template>
            <div>
                <mj-switch v-model="switch3" disabled></mj-switch>
            </div>
        </template>
        <script>
            export default {
                data () {
                    return {
                        switch3 = true;
                    }
                }
            }
        <\/script>
    `,
    code4: `
        <template>
            <div>
                <mj-switch v-model="switch4" notActiveColor="#123456" activeColor="#836e90"></mj-switch>
            </div>
        </template>
        <script>
            export default {
                data () {
                    return {
                        switch4 = true;
                    }
                }
            }
        <\/script>
    `
} as {
    [key: string]: string
}