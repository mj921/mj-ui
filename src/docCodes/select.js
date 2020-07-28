export default {
  code1: `
    <template>
      <div>
        <mj-select v-model="select1">
          <mj-option
            v-for="item in options1"
            :value="item.value"
            :label="item.label"
            :key="item.value"></mj-option>
        </mj-select>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            select1: "",
            options1: [{
              value: 1,
              label: "香蕉"
            }, {
              value: 2,
              label: "橘子"
            }, {
              value: 3,
              label: "苹果"
            }, {
              value: 4,
              label: "西瓜"
            }]
          }
        }
      }
    </script>
  `,
  code2: `
    <template>
      <div>
        <mj-select v-model="select2" disabled>
          <mj-option
            v-for="item in options2"
            :value="item.value"
            :label="item.label"
            :key="item.value"></mj-option>
        </mj-select>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            select2: "",
            options2: [{
              value: 1,
              label: "香蕉"
            }, {
              value: 2,
              label: "橘子"
            }, {
              value: 3,
              label: "苹果"
            }, {
              value: 4,
              label: "西瓜"
            }]
          }
        }
      }
    </script>
  `,
  code3: `
    <template>
      <div>
        <mj-select v-model="select3">
          <mj-option
            v-for="item in options2" 
            value="item.value"
            :label="item.label"
            :key="item.value"
            :disabled="itenm.disabled"></mj-option>
        </mj-select>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            select3: "",
            options3: [{
              value: 1,
              label: "香蕉"
            }, {
              value: 2,
              label: "橘子",
              disabled: true
            }, {
              value: 3,
              label: "苹果"
            }, {
              value: 4,
              label: "西瓜"
            }]
          }
        }
      }
    </script>
  `,
  code4: `
    <template>
      <div>
        <mj-select v-model="select4" multiple>
          <mj-option
            v-for="item in options4"
            :value="item.value"
            :label="item.label"
            :key="item.value"></mj-option>
        </mj-select>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            select4: "",
            options4: [{
              value: 1,
              label: "香蕉"
            }, {
              value: 2,
              label: "橘子"
            }, {
              value: 3,
              label: "苹果"
            }, {
              value: 4,
              label: "西瓜"
            }]
          }
        }
      }
    </script>
  `,
  code5: `
    <template>
      <div>
        <mj-select v-model="select5" clearable>
          <mj-option
            v-for="item in options5"
            :value="item.value"
            :label="item.label"
            :key="item.value"></mj-option>
        </mj-select>
      </div>
    </template>
    <script>
      export default {
        data () {
          return {
            select5: "",
            options5: [{
              value: 1,
              label: "香蕉"
            }, {
              value: 2,
              label: "橘子"
            }, {
              value: 3,
              label: "苹果"
            }, {
              value: 4,
              label: "西瓜"
            }]
          }
        }
      }
    </script>
  `
};
