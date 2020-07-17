<template>
  <div>
    <div class="mj-page-title1">Notification 通知</div>
    <mj-code title="基础用法" describe="基础的通知用法" :code="code1">
      <mj-button @click="openNotif">打开通知</mj-button>
    </mj-code>
    <mj-code title="自动消失时间" describe="消息提示自动消失时间" :code="code2">
      <mj-button @click="openNotif(10000)">关闭时间10s</mj-button>
      <mj-button @click="openNotif(0)">不自动关闭</mj-button>
    </mj-code>
    <mj-code
      title="不同位置"
      describe="可以让 Notification 从屏幕四角中的任意一角弹出"
      :code="code3"
    >
      <mj-button @click="openNotifPos('top-right')">右上角</mj-button>
      <mj-button @click="openNotifPos('top-left')">左上角</mj-button>
      <mj-button @click="openNotifPos('bottom-right')">右下角</mj-button>
      <mj-button @click="openNotifPos('bottom-left')">左下角</mj-button>
    </mj-code>
    <div class="mj-page-title2">Options</div>
    <mj-api-table :data="notificationAttr" />
  </div>
</template>
<script>
import codeJson from "@/docCodes/notification";

export default {
  name: "RadioPage",
  data() {
    return {
      code1: codeJson.code1,
      code2: codeJson.code2,
      code3: codeJson.code3,
      notificationAttr: [
        {
          prop: "title",
          desc: "标题",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "message",
          desc: "消息文字",
          type: "string",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "position",
          desc: "弹出位置",
          type: "string",
          optional: "top-right | bottom-right | top-left | bottom-left",
          defaultVal: "top-right"
        },
        {
          prop: "duration",
          desc: "显示时间, 毫秒。设为 0 则不会自动关闭",
          type: "number",
          optional: "—",
          defaultVal: "3000"
        },
        {
          prop: "onClose",
          desc: "关闭时的回调函数",
          type: "function",
          optional: "—",
          defaultVal: "—"
        },
        {
          prop: "onClick",
          desc: "点击 Notification 时的回调函数",
          type: "function",
          optional: "—",
          defaultVal: "—"
        }
      ]
    };
  },
  methods: {
    openNotif(duration = 3000) {
      this.$notification({
        title: "通知标题",
        message: "通知内容通知内容通知内容通知内容",
        duration
      });
    },
    openNotifPos(position) {
      this.$notification({
        title: "通知标题",
        message: "通知内容通知内容通知内容通知内容",
        duration: 3000,
        position
      });
    }
  }
};
</script>
<style lang="scss" scoped></style>
