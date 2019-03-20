export default {
    code1: `
        <template>
            <div>
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
            </div>
        </template>
    `,
    code2: `
        <template>
            <div>
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
            </div>
        </template>
    `,
    code3: `
        <template>
            <div>
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
    `
} as {
    [key: string]: string
}