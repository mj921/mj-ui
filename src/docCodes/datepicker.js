export default {
  code1: `
    <template>
      <div>
        <mj-date-picker v-model="date1" label="1">1</mj-date-picker>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            date1: ""
          }
        }
      }
    </script>
  `,
  code2: `
    <template>
      <div>
        绑定值：{{ date1 }}
        <mj-date-picker v-model="date1" format="yyyy年MM月dd日" />
        绑定值：{{ date2 }}
        <mj-date-picker v-model="date2" value-format="yyyy/MM/dd" />
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            date1: "",
            date2: ""
          }
        }
      }
    </script>
  `
};
