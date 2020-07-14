export default {
  code1: `
    <template>
      <div>
        <mj-radio v-model="radio1" label="1">1</mj-radio>
        <mj-radio v-model="radio1" label="2">2</mj-radio>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            radio1: ""
          }
        }
      }
    </script>
  `
};
