<template>
  <div class="mj-date-picker">
    <mj-input :value="value" @click="panelVisible = !panelVisible" />
    <div class="mj-date-picker--panel" v-show="panelVisible">
      <div class="mj-date-picker--header">
        <button class="mj-icon-more-left" @click="prevMore"></button>
        <button
          class="mj-icon-left"
          @click="prev"
          v-show="optionType === 'day'"
        ></button>
        <span
          @click="showYearList"
          v-show="optionType === 'day' || optionType === 'month'"
        >
          {{ year }}年
        </span>
        <span v-show="optionType === 'day'">{{ month }}月</span>
        <span v-show="optionType === 'year'">
          {{ Math.floor(year / 10) * 10 }}年 -
          {{ Math.floor(year / 10) * 10 + 9 }}年
        </span>
        <button class="mj-icon-more-right" @click="nextMore"></button>
        <button
          class="mj-icon-right"
          v-show="optionType === 'day'"
          @click="next"
        ></button>
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
        <div class="mj-date-picker--content-select-options">
          <div class="mj-date-picker--content-days" v-if="optionType === 'day'">
            <dl
              v-for="item in dayList"
              :key="item.type + item.num"
              :class="{
                'prev-month': item.type === 'prev',
                'next-month': item.type === 'next',
                curr:
                  year === currYear &&
                  month === currMonth &&
                  item.num === currDay
              }"
              @click="selectDay(item)"
            >
              {{ item.num }}
            </dl>
          </div>
          <div
            class="mj-date-picker--content-months"
            v-if="optionType === 'month'"
          >
            <dl
              v-for="(month, index) in monthList"
              :key="month"
              @click="selectMonth(index + 1)"
            >
              {{ month }}
            </dl>
          </div>
          <div
            class="mj-date-picker--content-months"
            v-if="optionType === 'year'"
          >
            <dl
              v-for="year in yearList"
              :key="'year' + year"
              @click="selectYear(year)"
            >
              {{ year }}
            </dl>
          </div>
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
      panelVisible: false,
      dayList: [],
      yearList: [],
      dateVolume: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      monthList: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ],
      year: 1992,
      month: 9,
      day: 21,
      currYear: 1992,
      currDay: 21,
      currMonth: 9,
      optionType: "day"
    };
  },
  methods: {
    createDayList(dateStr) {
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
      const nextShowVolume = 42 - dayList.length;
      for (let i = 1; i <= nextShowVolume; i++) {
        dayList.push({
          num: i,
          type: "next"
        });
      }
      this.dayList = dayList;
    },
    createYearList(year) {
      const yearList = [];
      const startYear = Math.floor(year / 10) * 10;
      for (let i = 0; i < 10; i++) {
        yearList.push(startYear + i);
      }
      this.yearList = yearList;
    },
    showYearList() {
      this.createYearList(this.year);
      this.optionType = "year";
    },
    selectYear(year) {
      this.year = year;
      this.optionType = "month";
    },
    selectMonth(month) {
      this.month = month;
      this.createDayList(`${this.year}-${this.month}-${this.day}`);
      this.optionType = "day";
    },
    selectDay(day) {
      this.day = day.num;
      if (day.type === "prev") {
        if (this.month === 1) {
          this.month = 12;
          this.year--;
        } else {
          this.month--;
        }
      } else if (day.type === "next") {
        if (this.month === 12) {
          this.month = 1;
          this.year++;
        } else {
          this.month++;
        }
      }
      this.currYear = this.year;
      this.currMonth = this.month;
      this.currDay = this.day;
      this.panelVisible = false;
      this.$emit(
        "input",
        dateFmt(
          new Date(`${this.currYear}-${this.currMonth}-${this.currDay}`),
          "yyyy-MM-dd"
        )
      );
      this.createDayList(`${this.year}-${this.month}-${this.day}`);
    },
    prev() {
      if (this.month === 1) {
        this.month = 12;
        this.year--;
      } else {
        this.month--;
      }
      this.createDayList(`${this.year}-${this.month}-${this.day}`);
    },
    prevMore() {
      switch (this.optionType) {
        case "day":
        case "month":
          this.year--;
          this.createDayList(`${this.year}-${this.month}-${this.day}`);
          break;
        case "year":
          this.year -= 10;
          this.createYearList(this.year);
          break;
      }
    },
    next() {
      if (this.month === 12) {
        this.month = 1;
        this.year++;
      } else {
        this.month++;
      }
      this.createDayList(`${this.year}-${this.month}-${this.day}`);
    },
    nextMore() {
      switch (this.optionType) {
        case "day":
        case "month":
          this.year++;
          this.createDayList(`${this.year}-${this.month}-${this.day}`);
          break;
        case "year":
          this.year += 10;
          this.createYearList(this.year);
          break;
      }
    }
  },
  created() {
    const valueDate = this.value ? new Date(this.value) : new Date();
    this.currYear = valueDate.getFullYear();
    this.currMonth = valueDate.getMonth() + 1;
    this.currDay = valueDate.getDate();
    this.createDayList(this.value);
  }
};
</script>

<style lang="scss" scoped>
.mj-date-picker {
  position: relative;
  $optionsWidth: 280px;
  $daySize: $optionsWidth / 7;
  $monthSize: $optionsWidth / 4;
  $yearSize: $optionsWidth / 4;
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
      .mj-date-picker--content-select-options {
        .mj-date-picker--content-days {
          overflow: hidden;
          width: $optionsWidth;
          dl {
            float: left;
            width: $daySize;
            height: $daySize;
            padding: 5px;
            text-align: center;
            line-height: $daySize - 10px;
            box-sizing: border-box;
            cursor: pointer;
            &.curr,
            &:hover {
              color: $blue;
            }
            &.prev-month,
            &.next-month {
              color: rgba($color: $black, $alpha: 0.4);
            }
          }
        }
        .mj-date-picker--content-months {
          overflow: hidden;
          width: $optionsWidth;
          dl {
            float: left;
            width: $monthSize;
            height: 46px;
            padding: 5px;
            margin: 10px 0;
            text-align: center;
            line-height: $monthSize - 10px;
            box-sizing: border-box;
            cursor: pointer;
            &.curr,
            &:hover {
              color: $blue;
            }
          }
        }
      }
    }
  }
}
</style>
