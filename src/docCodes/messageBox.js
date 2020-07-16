export default {
  code1: `
    <template>
      <div>
        <mj-button @click="openAlert">消息提示</mj-button>
      </div>
    </template>
    <script>
      export default {
        methods: {
          openAlert() {
            this.$alert("alert内容", "提示")
              .then(() => {
                this.$message.info("确认");
              })
              .catch(({ action }) => {
                this.$message.info(action);
              });
          }
        }
      }
    </script>
  `,
  code2: `
    <template>
      <div>
        <mj-button @click="openConfirm">确认消息</mj-button>
      </div>
    </template>
    <script>
      export default {
        methods: {
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
      }
    </script>
  `
};
