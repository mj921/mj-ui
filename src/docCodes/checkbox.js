export default {
  code1: `
    <template>
      <div>
        <mj-checkbox v-model="checked1" label="1">1</mj-checkbox>
        <mj-checkbox v-model="checked2" label="2">2</mj-checkbox>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            checked1: false,
            checked2: false
          }
        }
      }
    </script>
  `
};
