<template>
  <div class="mj-table" ref="tableRootWrap" :style="{ height: height }">
    <mj-scroll-view
      :overflow-x="true"
      :overflow-y="false"
      class="mj-table-scroll"
      ref="scroll"
      @scroll="scrollHandle"
    >
      <div
        class="mj-table-header__wrap"
        ref="tableHeader"
        :style="{
          width: adaptiveTableFlag ? '' : tableWidth + 'px',
          minWidth: adaptiveTableFlag ? tableWidth + 'px' : ''
        }"
      >
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
                <template v-if="column.slotHeader">
                  <slot
                    v-if="['left', 'right'].indexOf(column.fixed) === -1"
                    :name="column.prop + 'Header'"
                    v-bind:column="column"
                    v-bind:index="i"
                  ></slot>
                  <table-slot
                    v-else
                    :vvnode="$scopedSlots[column.prop + 'Header']"
                    :scope="{ column, i }"
                  ></table-slot
                ></template>
                <template v-else>
                  {{ column.label }}
                </template>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <mj-scroll-view
        class="mj-table-body__wrap"
        :style="{
          height: height && bodyHeight !== undefined ? bodyHeight + 'px' : '',
          width: adaptiveTableFlag ? '' : tableWidth + 'px',
          minWidth: adaptiveTableFlag ? tableWidth + 'px' : ''
        }"
        @scroll="bodyScroll"
      >
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
                        v-if="['left', 'right'].indexOf(column.fixed) === -1"
                        :name="column.slotName || column.prop"
                        v-bind:row="row"
                        v-bind:column="column"
                        v-bind:index="i"
                      ></slot>
                      <table-slot
                        v-else
                        :vvnode="$scopedSlots[column.slotName || column.prop]"
                        :scope="{ row, column, i }"
                      ></table-slot>
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
      </mj-scroll-view>
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
                <template v-if="column.slotHeader">
                  <slot
                    v-if="column.fixed === 'left'"
                    :name="column.prop + 'Header'"
                    v-bind:column="column"
                    v-bind:index="i"
                  ></slot>
                  <table-slot
                    v-else
                    :vvnode="$scopedSlots[column.prop + 'Header']"
                    :scope="{ column, i }"
                  ></table-slot
                ></template>
                <template v-else>
                  {{ column.label }}
                </template>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        ref="leftFixedBody"
        class="mj-table-fixed__body--left"
        :style="{
          height: height && bodyHeight !== undefined ? bodyHeight + 'px' : ''
        }"
      >
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
                        v-if="column.fixed === 'left'"
                        :name="column.slotName || column.prop"
                        v-bind:row="row"
                        v-bind:column="column"
                        v-bind:index="i"
                      ></slot>
                      <table-slot
                        v-else
                        :vvnode="$scopedSlots[column.slotName || column.prop]"
                        :scope="{ row, column, i }"
                      ></table-slot>
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
                <template v-if="column.slotHeader">
                  <slot
                    v-if="column.fixed === 'right'"
                    :name="column.prop + 'Header'"
                    v-bind:column="column"
                    v-bind:index="i"
                  ></slot>
                  <table-slot
                    v-else
                    :vvnode="$scopedSlots[column.prop + 'Header']"
                    :scope="{ column, i }"
                  ></table-slot
                ></template>
                <template v-else>
                  {{ column.label }}
                </template>
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        ref="rightFixedBody"
        class="mj-table-fixed__body--right"
        :style="{
          height: height && bodyHeight !== undefined ? bodyHeight + 'px' : ''
        }"
      >
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
                        v-if="column.fixed === 'right'"
                        :name="column.slotName || column.prop"
                        v-bind:row="row"
                        v-bind:column="column"
                        v-bind:index="i"
                      ></slot>
                      <table-slot
                        v-else
                        :vvnode="$scopedSlots[column.slotName || column.prop]"
                        :scope="{ row, column, i }"
                      ></table-slot>
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
const TableSlot = {
  props: {
    vvnode: Function,
    scope: Object
  },
  render(h) {
    return h("div", [this.vvnode(this.scope)]);
  }
};
export default {
  name: "MjTable",
  components: {
    MjScrollView,
    TableSlot
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
    },
    height: {
      type: String,
      default: ""
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
      scrollPosition: "left",
      bodyHeight: undefined
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
    },
    bodyScroll(e) {
      const { leftFixedBody, rightFixedBody } = this.$refs;
      leftFixedBody.scrollTop = e.target.scrollTop;
      rightFixedBody.scrollTop = e.target.scrollTop;
    }
  },
  updated() {
    if (this.$refs.tableRootWrap && this.$refs.tableHeader) {
      this.bodyHeight =
        this.$refs.tableRootWrap.offsetHeight -
        this.$refs.tableHeader.offsetHeight;
    }
  },
  mounted() {
    if (this.$refs.tableRootWrap && this.$refs.tableHeader) {
      this.bodyHeight =
        this.$refs.tableRootWrap.offsetHeight -
        this.$refs.tableHeader.offsetHeight;
    }
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
  .mj-table__header {
    font-weight: bold;
  }
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
    .mj-table-fixed__body--left {
      overflow: hidden;
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
      overflow: hidden;
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
