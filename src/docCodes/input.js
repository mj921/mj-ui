export default {
  code1: `
    <template>
      <div>
        <mj-input v-model="input1" />
        输入框值：{{ input1 }}
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            input1: ""
          }
        }
      }
    </script>
  `
};
