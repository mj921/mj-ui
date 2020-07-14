<template>
  <div>
    <div class="mj-page-title1">Dialog 对话框</div>
    <mj-code title="基础用法" describe="基础的对话框" :code="code1">
      <mj-button type="primary" @click="visible1 = true">打开Dialog</mj-button>
      <mj-dialog title="提示" :visible.sync="visible1">
        <span>对话框内容</span>
        <span slot="footer" class="dialog-footer">
          <mj-button @click="visible1 = false">取 消</mj-button>
          <mj-button type="primary" @click="visible1 = false">
            确 定
          </mj-button>
        </span>
      </mj-dialog>
    </mj-code>
    <mj-code title="对话框嵌套" describe="对话框嵌套" :code="code2">
      <mj-button type="primary" @click="visible2 = true">打开Dialog</mj-button>
      <mj-dialog title="提示" :visible.sync="visible2">
        <mj-button type="primary" @click="visible3 = true">
          打开Dialog
        </mj-button>
        <mj-dialog title="提示" :visible.sync="visible3" append-to-body>
          <span>对话框内容</span>
          <span slot="footer" class="dialog-footer">
            <mj-button @click="visible3 = false">取 消</mj-button>
            <mj-button type="primary" @click="visible3 = false">
              确 定
            </mj-button>
          </span>
        </mj-dialog>
        <span slot="footer" class="dialog-footer">
          <mj-button @click="visible2 = false">取 消</mj-button>
          <mj-button type="primary" @click="visible2 = false">
            确 定
          </mj-button>
        </span>
      </mj-dialog>
    </mj-code>
    <div class="mj-page-title2">Dialog 属性</div>
    <mj-api-table :data="dialogAttr" />
  </div>
</template>
<script>
import codeJson from "@/docCodes/dialog";

export default {
  name: "DialogPage",
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      code1: codeJson.code1,
      code2: codeJson.code2,
      dialogAttr: [
        {
          prop: "visible",
          desc: "是否显示 Dialog，支持 .sync 修饰符",
          type: "boolean",
          optional: "—",
          defaultVal: "false"
        },
        {
          prop: "title",
          desc: "Dialog 的标题",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "width",
          desc: "Dialog 的宽度",
          type: "string",
          optional: "—",
          defaultVal: "30%"
        },
        {
          prop: "append-to-body",
          desc:
            "Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true",
          type: "boolean",
          optional: "—",
          defaultVal: "false"
        },
        {
          prop: "mask",
          desc: "是否需要遮罩层",
          type: "boolean",
          optional: "—",
          defaultVal: "true"
        },
        {
          prop: "mask-append-to-body",
          desc:
            "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上",
          type: "boolean",
          optional: "—",
          defaultVal: "true"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.dialog-footer {
  .mj-button {
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
}
</style>
