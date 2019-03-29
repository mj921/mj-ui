export default {
    code1: `
        <template>
            <div>
                <mj-button>默认按钮</mj-button>
                <mj-button type="primary">主要按钮</mj-button>
                <mj-button type="danger">危险按钮</mj-button>
                <mj-button type="warning">警告按钮</mj-button>
                <mj-button type="text">文字按钮</mj-button>
            </div>
        </template>
    `,
    code2: `
        <template>
            <div>
                <mj-button disabled>默认按钮</mj-button>
                <mj-button type="primary" disabled>主要按钮</mj-button>
                <mj-button type="danger" disabled>危险按钮</mj-button>
                <mj-button type="warning" disabled>警告按钮</mj-button>
                <mj-button type="text" disabled>文字按钮</mj-button>
            </div>
        </template>
    `,
    code3: `
        <template>
            <div>
                <mj-button type="primary">默认大小</mj-button>
                <mj-button type="primary" size="medium">中等大小</mj-button>
                <mj-button type="primary" size="small">小型按钮</mj-button>
                <mj-button type="primary" size="mini">迷你按钮</mj-button>
            </div>
        </template>
    `
}