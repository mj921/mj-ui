<template>
  <div class="mj-date-picker">
    <mj-input />
    <div class="mj-date-picker--panel">
      <div class="mj-date-picker--header">
        <button class="mj-icon-more-left" @click="prevMore"></button>
        <button class="mj-icon-left" @click="prev"></button>
        <span>{{ year }}年</span>
        <span>{{ month }}月</span>
        <button class="mj-icon-more-right" @click="nextMore"></button>
        <button class="mj-icon-right" @click="next"></button>
      </div>
      <div class="mj-date-picker--content">
        <dt>
          <dl>日</dl>
          <dl>一</dl>
          <dl>二</dl>
          <dl>三</dl>
          <dl>四</dl>
          <dl>五</dl>
          <dl>六</dl>
        </dt>
        <div class="mj-date-picker--content-days">
          <dl
            v-for="item in dayList"
            :key="item.type + item.num"
            :class="{
              'prev-month': item.type === 'prev',
              'next-month': item.type === 'next',
              curr:
                year === currYear && month === currMonth && item.num === currDay
            }"
          >
            {{ item.num }}
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFmt } from "../utils";
export default {
  name: "MjDatePicker",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dayList: [],
      dateVolume: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      year: 1992,
      month: 9,
      day: 21,
      currYear: 1992,
      currDay: 21,
      currMonth: 9
    };
  },
  methods: {
    createDays(dateStr) {
      const nowDate = dateStr ? new Date(dateStr) : new Date();
      const dayList = [];
      const date = new Date(dateFmt(nowDate, "yyyy-MM-01"));
      let volume, prevVolumem;
      this.year = nowDate.getFullYear();
      this.month = nowDate.getMonth() + 1;
      this.day = nowDate.getDate();
      const year = date.getFullYear();
      const month = date.getMonth();
      const leapYearFlag =
        year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
      if (month === 1 && leapYearFlag) {
        volume = 29;
      } else {
        volume = this.dateVolume[month];
      }
      if (month === 2 && leapYearFlag) {
        prevVolumem = 29;
      } else if (month === 0) {
        prevVolumem = 31;
      } else {
        prevVolumem = this.dateVolume[month - 1];
      }
      const weekDay = date.getDay();
      for (
        let i = prevVolumem - (weekDay === 0 ? 7 : weekDay) + 1;
        i <= prevVolumem;
        i++
      ) {
        dayList.push({
          num: i,
          type: "prev"
        });
      }
      for (let i = 1; i <= volume; i++) {
        dayList.push({
          num: i,
          type: "curr"
        });
      }
      const nextShowVolume = 7 - ((weekDay + volume) % 7);
      for (let i = 1; i <= nextShowVolume; i++) {
        dayList.push({
          num: i,
          type: "next"
        });
      }
      this.dayList = dayList;
    },
    prev() {
      if (this.month === 1) {
        this.month = 12;
        this.year--;
      } else {
        this.month--;
      }
      this.createDays(`${this.year}-${this.month}-${this.day}`);
    },
    prevMore() {
      this.year--;
      this.createDays(`${this.year}-${this.month}-${this.day}`);
    },
    next() {
      if (this.month === 12) {
        this.month = 1;
        this.year++;
      } else {
        this.month++;
      }
      this.createDays(`${this.year}-${this.month}-${this.day}`);
    },
    nextMore() {
      this.year++;
      this.createDays(`${this.year}-${this.month}-${this.day}`);
    }
  },
  created() {
    const valueDate = this.value ? new Date(this.value) : new Date();
    this.currYear = valueDate.getFullYear();
    this.currMonth = valueDate.getMonth() + 1;
    this.currDay = valueDate.getDate();
    this.createDays(this.value);
  }
};
</script>

<style lang="scss" scoped>
.mj-date-picker {
  $daySize: 40px;
  position: relative;
  &.mj-date-picker--small {
    $daySize: 32px;
  }
  .mj-date-picker--panel {
    position: absolute;
    top: 42px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 1px solid $black_borderColor;
    background-color: $white;
    font-size: 14px;
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
      dt {
        overflow: hidden;
        border-bottom: 1px solid $black_borderColor;
        dl {
          float: left;
          width: $daySize;
          height: $daySize;
          padding: 5px;
          text-align: center;
          line-height: $daySize - 10px;
          box-sizing: border-box;
        }
      }
      .mj-date-picker--content-days {
        overflow: hidden;
        width: $daySize * 7;
        dl {
          float: left;
          width: $daySize;
          height: $daySize;
          padding: 5px;
          text-align: center;
          line-height: $daySize - 10px;
          box-sizing: border-box;
          cursor: default;
          &.curr {
            color: $blue;
          }
          &.prev-month,
          &.next-month {
            color: rgba($color: $black, $alpha: 0.4);
          }
        }
      }
    }
  }
}
</style>
