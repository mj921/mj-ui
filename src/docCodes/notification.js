export default {
  code1: `
    <template>
      <div>
        <mj-button @click="openNotif">打开通知</mj-button>
      </div>
    </template>
    <script>
      export default {
        methods: {
          openNotif(duration = 3000) {
            this.$notification({
              title: "通知标题",
              message: "通知内容通知内容通知内容通知内容",
              duration
            });
          }
        }
      }
    </script>
  `,
  code2: `
    <template>
      <div>
        <mj-button @click="openNotif(10000)">关闭时间10s</mj-button>
        <mj-button @click="openNotif(0)">不自动关闭</mj-button>
      </div>
    </template>
    <script>
      export default {
        methods: {
          openNotif(duration = 3000) {
            this.$notification({
              title: "通知标题",
              message: "通知内容通知内容通知内容通知内容",
              duration
            });
          }
        }
      }
    </script>
  `,
  code3: `
    <template>
      <div>
        <mj-button @click="openNotifPos('top-right')">右上角</mj-button>
        <mj-button @click="openNotifPos('top-left')">左上角</mj-button>
        <mj-button @click="openNotifPos('bottom-right')">右下角</mj-button>
        <mj-button @click="openNotifPos('bottom-left')">左下角</mj-button>
      </div>
    </template>
    <script>
      export default {
        methods: {
          openNotifPos(position) {
            this.$notification({
              title: "通知标题",
              message: "通知内容通知内容通知内容通知内容",
              duration: 3000,
              position
            });
          }
        }
      }
    </script>
  `
};
