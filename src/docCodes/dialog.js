export default {
  code1: `
    <template>
      <div>
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
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            visible1: false
          }
        }
      }
    </script>
  `,
  code2: `
    <template>
      <div>
        <mj-button type="primary" @click="visible1 = true">打开Dialog</mj-button>
        <mj-dialog title="提示" :visible.sync="visible1">
          <mj-button type="primary" @click="visible2 = true">
            打开Dialog
          </mj-button>
          <mj-dialog title="提示" :visible.sync="visible2" append-to-body>
            <span>对话框内容</span>
            <span slot="footer" class="dialog-footer">
              <mj-button @click="visible2 = false">取 消</mj-button>
              <mj-button type="primary" @click="visible2 = false">
                确 定
              </mj-button>
            </span>
          </mj-dialog>
          <span slot="footer" class="dialog-footer">
            <mj-button @click="visible1 = false">取 消</mj-button>
            <mj-button type="primary" @click="visible1 = false">
              确 定
            </mj-button>
          </span>
        </mj-dialog>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            visible1: false,
            visible2: false
          }
        }
      }
    </script>
  `
};
