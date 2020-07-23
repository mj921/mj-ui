<template>
  <div class="mj-table">
    <table>
      <thead>
        <tr>
          <th
            v-for="(column, i) in columns"
            :key="i"
            :style="{
              width: column.width,
              'min-width': column.minWidth,
              'text-align': column.align
            }"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <template v-if="data && data.length > 0">
          <tr v-for="(row, i) in data" :key="'tr' + i">
            <template v-for="(column, j) in columns">
              <td
                :key="'tr' + i + ',td' + j"
                :style="{
                  'text-align': column.align
                }"
              >
                <div v-if="column.type === 'slot'">
                  <slot
                    :name="column.slotName || column.prop"
                    v-bind:row="row"
                    v-bind:column="column"
                    v-bind:index="i"
                  ></slot>
                </div>
                <div v-else>
                  {{
                    column.formatter
                      ? column.formatter(row, i)
                      : row[column.prop]
                  }}
                </div>
              </td>
            </template>
          </tr>
        </template>
        <tr v-else>
          <td class="mj-table--empty" :colspan="columns.length">
            {{ emptyText }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mj-table--hidden-column"><slot></slot></div>
  </div>
</template>
<script>
export default {
  name: "MjTable",
  props: {
    data: {
      type: Array,
      required: true,
      default: function() {
        return [];
      }
    },
    emptyText: {
      type: String,
      default: "暂无数据"
    },
    columns: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.mj-table {
  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid $black_borderColor;
      td,
      th {
        padding: 15px;
        line-height: 20px;
        font-size: 14px;
        color: $black;
        text-align: left;
      }
    }
    tbody {
      tr {
        &:hover {
          background-color: $white_theadColor;
        }
        td {
          &.mj-table--empty {
            text-align: center;
            line-height: 60px;
            &:hover {
              background-color: $white;
            }
          }
        }
      }
    }
  }
  .mj-table--hidden-column {
    display: none;
  }
}
</style>
