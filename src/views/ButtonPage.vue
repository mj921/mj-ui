<template>
  <div class="mj-page">
    <div class="mj-page-title1">Button 按钮</div>
    <mj-code title="基础用法" describe="基础的按钮用法" :code="code1">
      <mj-button>默认按钮</mj-button>
      <mj-button type="primary">主要按钮</mj-button>
      <mj-button type="danger">危险按钮</mj-button>
      <mj-button type="warning">警告按钮</mj-button>
      <mj-button type="text">文字按钮</mj-button>
    </mj-code>
    <mj-code title="禁用状态" describe="按钮的禁用状态" :code="code2">
      <mj-button disabled>默认按钮</mj-button>
      <mj-button type="primary" disabled>主要按钮</mj-button>
      <mj-button type="danger" disabled>危险按钮</mj-button>
      <mj-button type="warning" disabled>警告按钮</mj-button>
      <mj-button type="text" disabled>文字按钮</mj-button>
    </mj-code>
    <mj-code title="不同尺寸" describe="不同尺寸的按钮" :code="code2">
      <mj-button type="primary">默认大小</mj-button>
      <mj-button type="primary" size="medium">中等大小</mj-button>
      <mj-button type="primary" size="small">小型按钮</mj-button>
      <mj-button type="primary" size="mini">迷你按钮</mj-button>
    </mj-code>
    <div class="mj-page-title2">Button 属性</div>
    <mj-api-table :data="buttonAttr" />
  </div>
</template>

<script>
import codeJson from "@/docCodes/button";

export default {
  name: "ButtonPage",
  data() {
    return {
      code1: codeJson.code1,
      code2: codeJson.code2,
      code3: codeJson.code3,
      buttonAttr: [
        {
          prop: "type",
          desc: "按钮类型",
          type: "string",
          optional: "primary | danger | warning | text | default",
          defaultVal: "default"
        },
        {
          prop: "size",
          desc: "按钮大小",
          type: "string",
          optional: "medium | small | mini",
          defaultVal: "—"
        },
        {
          prop: "disabled",
          desc: "是否禁用",
          type: "string | boolean",
          optional: "—",
          defaultVal: "false"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
