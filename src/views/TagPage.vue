<template>
  <div>
    <div class="mj-page-title1">Tag 标签</div>
    <mj-code title="基础用法" describe="基础的标签用法" :code="code1">
      <mj-tag>标签1</mj-tag>
      <mj-tag>标签2</mj-tag>
      <mj-tag>标签三</mj-tag>
      <mj-tag>标签4</mj-tag>
      <mj-tag>标签5</mj-tag>
    </mj-code>
    <mj-code title="可关闭的标签" :code="code2">
      <mj-tag closeabled>标签1</mj-tag>
      <mj-tag closeabled>标签2</mj-tag>
    </mj-code>
    <mj-code title="自定义颜色" :code="code3">
      <mj-tag textColor="red">红色字体</mj-tag>
      <mj-tag color="yellow">黄色背景</mj-tag>
      <mj-tag borderColor="green">绿色边框</mj-tag>
    </mj-code>
    <mj-code title="不同尺寸的标签" :code="code4">
      <mj-tag>默认标签</mj-tag>
      <mj-tag size="medium">中等标签</mj-tag>
      <mj-tag size="small">小型标签</mj-tag>
      <mj-tag size="mini">迷你标签</mj-tag>
    </mj-code>
    <div class="mj-page-title2">Tag 属性</div>
    <mj-api-table :data="tagAttr"></mj-api-table>
    <div class="mj-page-title2">Tag 事件</div>
    <mj-api-table :data="tagEvent" type="event"></mj-api-table>
  </div>
</template>
<script>
import codeJson from "@/docCodes/tag";

export default {
  name: "TagPage",
  data() {
    return {
      code1: codeJson.code1,
      code2: codeJson.code2,
      code3: codeJson.code3,
      code4: codeJson.code4,
      tagAttr: [
        {
          prop: "closeabled",
          desc: "是否可关闭",
          type: "boolean",
          optional: "true | false",
          defaultVal: "false"
        },
        {
          prop: "color",
          desc: "背景色",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "borderColor",
          desc: "边框色",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "textColor",
          desc: "字体颜色",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "size",
          desc: "标签大小",
          type: "string",
          optional: "medium | small | mini",
          defaultVal: "—"
        }
      ],
      tagEvent: [
        {
          event: "close",
          desc: "标签关闭事件",
          callback: "—"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
