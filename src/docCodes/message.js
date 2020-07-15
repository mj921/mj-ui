export default {
  code1: `
    <template>
      <div>
        <mj-button @click="openMsg1">打开消息提示</mj-button>
      </div>
    </template>
    <script>
      export default {
        methods: {
          openMsg1(duration = 3000) {
            this.$message({
              message: "消息提示",
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
        <mj-button @click="openMsg1(10000)">关闭时间10s</mj-button>
        <mj-button @click="openMsg1(0)">不自动关闭</mj-button>
      </div>
    </template>
    <script>
      export default {
        methods: {
          openMsg1(duration = 3000) {
            this.$message({
              message: "消息提示",
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
        <mj-button @click="open1">消息</mj-button>
        <mj-button @click="open2">成功</mj-button>
        <mj-button @click="open3">警告</mj-button>
        <mj-button @click="open4">错误</mj-button>
      </div>
    </template>
    <script>
      export default {
        methods: {
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
      }
    </script>
  `
};
