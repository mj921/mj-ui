<template>
  <div class="mj-table" ref="tableRootWrap">
    <mj-scroll-view
      :overflow-x="true"
      :overflow-y="false"
      class="mj-table-scroll"
      ref="scroll"
      @scroll="scrollHandle"
    >
      <div class="mj-table-header__wrap">
        <table
          :style="{
            width: adaptiveTableFlag ? '' : tableWidth + 'px',
            minWidth: adaptiveTableFlag ? tableWidth + 'px' : ''
          }"
        >
          <colgroup>
            <col
              v-for="(col, i) in colList"
              :key="'mj-table-header_column_' + i"
              :width="col.width"
              :align="col.align"
            />
          </colgroup>
          <thead>
            <tr>
              <th
                v-for="(column, i) in columnList"
                :key="i"
                :style="{
                  'text-align': column.align
                }"
              >
                <slot
                  v-if="column.slotHeader"
                  :name="column.prop + 'Header'"
                  v-bind:column="column"
                  v-bind:index="i"
                ></slot>
                <template v-else>
                  {{ column.label }}
                </template>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="mj-table-body__wrap">
        <table
          :style="{
            width: adaptiveTableFlag ? '' : tableWidth + 'px',
            minWidth: adaptiveTableFlag ? tableWidth + 'px' : ''
          }"
        >
          <colgroup>
            <col
              v-for="(col, i) in colList"
              :key="'mj-table-body_column_' + i"
              :width="col.width"
              :align="col.align"
            />
          </colgroup>
          <tbody>
            <template v-if="data && data.length > 0">
              <tr v-for="(row, i) in data" :key="'tr' + i">
                <template v-for="(column, j) in columnList">
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
              <td class="mj-table--empty" :colspan="columnList.length">
                {{ emptyText }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </mj-scroll-view>
    <div
      class="mj-table-fixed__wrap--left"
      :class="{ 'hidden-box-shadow': scrollPosition === 'left' }"
      :style="{
        width: leftFixedWidth + 'px'
      }"
      v-if="
        leftFixedNum > 0 &&
          $refs.tableRootWrap &&
          $refs.tableRootWrap.offsetWidth < this.tableWidth
      "
    >
      <div class="mj-table-fixed__header--left">
        <table
          :style="{
            width: adaptiveTableFlag ? '' : tableWidth + 'px',
            minWidth: adaptiveTableFlag ? tableWidth + 'px' : ''
          }"
        >
          <colgroup>
            <col
              v-for="(col, i) in colList"
              :key="'mj-table-fixed-header_column_' + i"
              :width="col.width"
              :align="col.align"
            />
          </colgroup>
          <thead>
            <tr>
              <th
                v-for="(column, i) in columnList"
                :key="i"
                :style="{
                  'text-align': column.align
                }"
              >
                <slot
                  v-if="column.slotHeader"
                  :name="column.prop + 'Header'"
                  v-bind:column="column"
                  v-bind:index="i"
                ></slot>
                <template v-else>
                  {{ column.label }}
                </template>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="mj-table-fixed__body--left">
        <table
          :style="{
            width: adaptiveTableFlag ? '' : tableWidth + 'px',
            minWidth: adaptiveTableFlag ? tableWidth + 'px' : ''
          }"
        >
          <colgroup>
            <col
              v-for="(col, i) in colList"
              :key="'mj-table-fixed-body_column_' + i"
              :width="col.width"
              :align="col.align"
            />
          </colgroup>
          <tbody>
            <template v-if="data && data.length > 0">
              <tr v-for="(row, i) in data" :key="'tr' + i">
                <template v-for="(column, j) in columnList">
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
      </div>
    </div>
    <div
      class="mj-table-fixed__wrap--right"
      :class="{ 'hidden-box-shadow': scrollPosition === 'right' }"
      :style="{
        width: rightFixedWidth + 'px'
      }"
      v-if="
        rightFixedNum > 0 &&
          $refs.tableRootWrap &&
          $refs.tableRootWrap.offsetWidth < this.tableWidth
      "
    >
      <div class="mj-table-fixed__header--right">
        <table
          :style="{
            width: adaptiveTableFlag ? '' : tableWidth + 'px',
            minWidth: adaptiveTableFlag ? tableWidth + 'px' : ''
          }"
        >
          <colgroup>
            <col
              v-for="(col, i) in colList"
              :key="'mj-table-fixed-header_column_' + i"
              :width="col.width"
              :align="col.align"
            />
          </colgroup>
          <thead>
            <tr>
              <th
                v-for="(column, i) in columnList"
                :key="i"
                :style="{
                  'text-align': column.align
                }"
              >
                <slot
                  v-if="column.slotHeader"
                  :name="column.prop + 'Header'"
                  v-bind:column="column"
                  v-bind:index="i"
                ></slot>
                <template v-else>
                  {{ column.label }}
                </template>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="mj-table-fixed__body--right">
        <table
          :style="{
            width: adaptiveTableFlag ? '' : tableWidth + 'px',
            minWidth: adaptiveTableFlag ? tableWidth + 'px' : ''
          }"
        >
          <colgroup>
            <col
              v-for="(col, i) in colList"
              :key="'mj-table-fixed-body_column_' + i"
              :width="col.width"
              :align="col.align"
            />
          </colgroup>
          <tbody>
            <template v-if="data && data.length > 0">
              <tr v-for="(row, i) in data" :key="'tr' + i">
                <template v-for="(column, j) in columnList">
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
      </div>
    </div>
  </div>
</template>
<script>
import MjScrollView from "../scrollView";
import { addResizeListener, removeResizeListener } from "../utils/dom";
export default {
  name: "MjTable",
  components: {
    MjScrollView
  },
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
  computed: {
    adaptiveTableFlag() {
      return this.columns.some(column => typeof column.width !== "number");
    },
    tableWidth() {
      let width = 0;
      this.columns.forEach(column => {
        if (typeof column.width === "number") {
          width += column.width;
        } else if (typeof column.minWidth === "number") {
          width += column.minWidth;
        } else {
          width += 80;
        }
      });
      return width;
    },
    adaptiveWidth() {
      let width = 0;
      this.columns.forEach(column => {
        if (typeof column.width !== "number") {
          if (typeof column.minWidth === "number") {
            width += column.minWidth;
          } else {
            width += 80;
          }
        }
      });
      return width;
    },
    leftFixedWidth() {
      let width = 0;
      for (let i = 0; i < this.leftFixedNum; i++) {
        width += this.colList[i].width;
      }
      return width;
    },
    rightFixedWidth() {
      let width = 0;
      let len = this.colList.length;
      for (let i = 0; i < this.rightFixedNum; i++) {
        width += this.colList[len - 1 - i].width;
      }
      return width;
    }
  },
  watch: {
    columns() {
      this.getFixed();
      this.getColRealAttr();
    }
  },
  data() {
    return {
      columnList: [],
      colList: [],
      rightFixedNum: 0,
      leftFixedNum: 0,
      scrollPosition: "left"
    };
  },
  methods: {
    getColRealAttr() {
      let colList = [];
      if (
        this.adaptiveTableFlag &&
        this.$refs.tableRootWrap &&
        this.$refs.tableRootWrap.offsetWidth > this.tableWidth
      ) {
        const allAdaotiveWidth =
          this.$refs.tableRootWrap.offsetWidth - this.tableWidth;
        let surplusAdaotiveWidth = allAdaotiveWidth;
        let lastIndex = -1;
        colList = this.columnList.map((column, i) => {
          let width = 0;
          if (typeof column.width === "number") {
            width = column.width;
          } else if (typeof column.minWidth === "number") {
            const adaotiveWidth = Math.floor(
              (column.minWidth / this.adaptiveWidth) * allAdaotiveWidth
            );
            width = column.minWidth + adaotiveWidth;
            surplusAdaotiveWidth -= adaotiveWidth;
            lastIndex = i;
          } else {
            const adaotiveWidth = Math.floor(
              (column.minWidth / this.adaptiveWidth) * allAdaotiveWidth
            );
            width = 80 + adaotiveWidth;
            surplusAdaotiveWidth -= adaotiveWidth;
            lastIndex = i;
          }
          return {
            width,
            align: column.align || "left"
          };
        });
        colList[lastIndex].width =
          colList[lastIndex].width + surplusAdaotiveWidth;
      } else {
        colList = this.columnList.map(column => {
          const width =
            typeof column.width === "number"
              ? column.width
              : typeof column.minWidth === "number"
              ? column.minWidth
              : 80;
          return {
            width,
            align: column.align
          };
        });
      }
      this.colList = colList;
    },
    getFixed() {
      let columnList = [];
      let left = 0;
      let right = 0;
      this.columns.forEach(column => {
        if (column.fixed === "left") {
          columnList.splice(left, 0, column);
          left++;
        } else if (column.fixed === "right") {
          columnList.push(column);
          right++;
        } else {
          columnList.splice(columnList.length - right, 0, column);
        }
      });
      this.columnList = columnList;
      this.leftFixedNum = left;
      this.rightFixedNum = right;
    },
    scrollHandle(e) {
      if (e.target.scrollLeft === 0) {
        this.scrollPosition = "left";
      } else if (
        e.target.scrollLeft + e.target.offsetWidth ===
        e.target.scrollWidth
      ) {
        this.scrollPosition = "right";
      } else {
        this.scrollPosition = "middle";
      }
    }
  },
  mounted() {
    this.getColRealAttr();
    addResizeListener(this.$refs.tableRootWrap, this.getColRealAttr);
    this.$emit("hook:beforeDestroy", () => {
      removeResizeListener(this.$refs.tableRootWrap, this.getColRealAttr);
    });
  },
  created() {
    this.getFixed();
    this.getColRealAttr();
  }
};
</script>
<style lang="scss" scoped>
.mj-table {
  position: relative;
  overflow: hidden;
  .mj-table-fixed__wrap--left {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    &.hidden-box-shadow {
      box-shadow: none;
    }
  }
  .mj-table-fixed__wrap--right {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
    background-color: #fff;
    &.hidden-box-shadow {
      box-shadow: none;
    }
    .mj-table-fixed__header--right {
      position: absolute;
      right: 0;
      top: 0;
    }
    .mj-table-fixed__body--right {
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
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
}
</style>
