<template>
  <div>
    <div class="mj-page-title1">MessageBox 弹框</div>
    <mj-code title="消息提示" describe="消息提示alert" :code="code1">
      <mj-button @click="openAlert">消息提示</mj-button>
    </mj-code>
    <mj-code title="确认消息" describe="确认消息confirm" :code="code2">
      <mj-button @click="openConfirm">确认消息</mj-button>
    </mj-code>
    <div class="mj-page-title2">Options</div>
    <mj-api-table :data="messageAttr" />
  </div>
</template>
<script>
import codeJson from "@/docCodes/messageBox";

export default {
  name: "RadioPage",
  data() {
    return {
      code1: codeJson.code1,
      code2: codeJson.code2,
      messageAttr: [
        {
          prop: "message",
          desc: "消息文字",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "title",
          desc: "标题",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "showCancelButton",
          desc: "是否显示取消按钮",
          type: "boolean",
          optional: "—",
          defaultVal: "true"
        },
        {
          prop: "showConfirmButton",
          desc: "是否显示确定按钮",
          type: "boolean",
          optional: "—",
          defaultVal: "true"
        },
        {
          prop: "cancelButtonText",
          desc: "取消按钮文案",
          type: "string",
          optional: "—",
          defaultVal: "取消"
        },
        {
          prop: "confirmButtonText",
          desc: "确定按钮文案",
          type: "string",
          optional: "—",
          defaultVal: "确定"
        },
        {
          prop: "callback",
          desc: "若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调",
          type:
            "function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法",
          optional: "—",
          defaultVal: "—"
        }
      ]
    };
  },
  methods: {
    openAlert() {
      this.$alert("alert内容", "提示")
        .then(() => {
          this.$message.info("确认");
        })
        .catch(({ action }) => {
          this.$message.info(action);
        });
    },
    openConfirm() {
      this.$confirm("confirm内容", "提示")
        .then(() => {
          this.$message.info("确认");
        })
        .catch(({ action }) => {
          this.$message.info(action);
        });
    }
  }
};
</script>
<style lang="scss" scoped></style>
