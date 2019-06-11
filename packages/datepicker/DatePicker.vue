<template>
  <div class="mj-date-picker">
    <mj-input />
    <div class="mj-date-picker--panel">
      <div class="mj-date-picker--header">
        <button class="mj-icon-more-left"></button>
        <button class="mj-icon-left"></button>
        <span>2019年</span>
        <span>6月</span>
        <button class="mj-icon-more-right"></button>
        <button class="mj-icon-right"></button>
      </div>
      <div class="mj-date-picker--content">
        <table>
          <thead>
            <tr>
              <th>日</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MjDatePicker"
};
</script>

<style lang="scss" scoped>
.mj-date-picker {
  .mj-date-picker--panel {
    position: absolute;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid $black_borderColor;
    background-color: $white;
    .mj-date-picker--header {
      text-align: center;
      line-height: 30px;
      overflow: hidden;
      margin: 12px;
      button {
        margin-top: 9px;
        outline: none;
        border: none;
        background-color: transparent;
        color: $black-primaryColor;
        font-size: 12px;
        cursor: pointer;
        &:hover {
          color: $blue;
        }
        &[class*="-left"] {
          float: left;
        }
        &[class*="-right"] {
          float: right;
        }
      }
      span {
        margin: 0 3px;
        cursor: pointer;
        color: $black-primaryColor;
        &:hover {
          color: $blue;
        }
      }
    }
    .mj-date-picker--content {
      margin: 15px;
      table {
        thead {
          border-bottom: 1px solid $black_borderColor;
          th {
            width: 37px;
            height: 37px;
            padding: 5px;
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>
