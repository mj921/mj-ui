<template>
  <div>
    <div class="mj-page-title1">Message 消息提示</div>
    <mj-code title="基础用法" describe="基础的消息提示用法" :code="code1">
      <mj-button @click="openMsg1">打开消息提示</mj-button>
    </mj-code>
    <mj-code title="自动消失时间" describe="消息提示自动消失时间" :code="code2">
      <mj-button @click="openMsg1(10000)">关闭时间10s</mj-button>
      <mj-button @click="openMsg1(0)">不自动关闭</mj-button>
    </mj-code>
    <mj-code
      title="不同状态"
      describe="用来显示「成功、警告、消息、错误」类的操作反馈。"
      :code="code3"
    >
      <mj-button @click="open1">消息</mj-button>
      <mj-button @click="open2">成功</mj-button>
      <mj-button @click="open3">警告</mj-button>
      <mj-button @click="open4">错误</mj-button>
    </mj-code>
    <div class="mj-page-title2">Options</div>
    <mj-api-table :data="messageAttr" />
  </div>
</template>
<script>
import codeJson from "@/docCodes/message";

export default {
  name: "RadioPage",
  data() {
    return {
      code1: codeJson.code1,
      code2: codeJson.code2,
      code3: codeJson.code3,
      messageAttr: [
        {
          prop: "message",
          desc: "消息文字",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "type",
          desc: "主题",
          type: "string",
          optional: "success | warning | info | error",
          defaultVal: "info"
        },
        {
          prop: "duration",
          desc: "显示时间, 毫秒。设为 0 则不会自动关闭",
          type: "number",
          optional: "—",
          defaultVal: "3000"
        }
      ]
    };
  },
  methods: {
    openMsg1(duration = 3000) {
      this.$message({
        message: "消息提示",
        duration
      });
    },
    open1() {
      this.$message("这是一条消息提示");
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success"
      });
    },
    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },
    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    }
  }
};
</script>
<style lang="scss" scoped></style>
