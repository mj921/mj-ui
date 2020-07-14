<template>
  <div
    class="mj-date-picker__panel"
    :class="['mj-date-picker__panel--' + popperPosition]"
    v-show="showPopper"
  >
    <div class="mj-date-picker--header">
      <button class="mj-icon-more-left" @click.stop="prevMore"></button>
      <button
        class="mj-icon-left"
        @click.stop="prev"
        v-show="optionType === 'date'"
      ></button>
      <span
        @click.stop="showYearList"
        v-show="optionType === 'date' || optionType === 'month'"
      >
        {{ year }}年
      </span>
      <span v-show="optionType === 'date'" @click.stop="showMonthList">
        {{ month }}月
      </span>
      <span v-show="optionType === 'year'">
        {{ Math.floor(year / 10) * 10 }}年 -
        {{ Math.floor(year / 10) * 10 + 9 }}年
      </span>
      <button class="mj-icon-more-right" @click.stop="nextMore"></button>
      <button
        class="mj-icon-right"
        v-show="optionType === 'date'"
        @click.stop="next"
      ></button>
    </div>
    <div class="mj-date-picker--content">
      <date-list
        ref="dateList"
        :date="dateObj"
        :curr-year="currYear"
        :curr-month="currMonth"
        :curr-day="currDay"
        @selectFinish="selectDay"
        v-show="optionType === 'date'"
      />
      <month-list @selectFinish="selectMonth" v-show="optionType === 'month'" />
      <year-list
        :year="year"
        @selectFinish="selectYear"
        v-show="optionType === 'year'"
      />
    </div>
  </div>
</template>

<script>
import Popper from "../utils/popper";
import DateList from "./basic/DateList";
import MonthList from "./basic/MonthList";
import YearList from "./basic/YearList";
export default {
  mixins: [Popper],
  components: {
    DateList,
    MonthList,
    YearList
  },
  props: {
    currYear: {
      type: Number,
      required: true
    },
    currMonth: {
      type: Number,
      required: true
    },
    currDay: {
      type: Number,
      required: true
    },
    valueDate: {
      type: Date,
      required: true
    },
    type: {
      type: String,
      default: "date"
    }
  },
  data() {
    return {
      yearList: [],
      year: 1992,
      month: 9,
      day: 21,
      optionType: "date",
      dateObj: new Date()
    };
  },
  methods: {
    showYearList() {
      this.optionType = "year";
    },
    showMonthList() {
      this.optionType = "month";
    },
    selectYear(year) {
      this.year = year;
      if (this.type === "year") {
        this.$emit("selectFinish", {
          year: this.year
        });
        return;
      }
      this.optionType = "month";
    },
    selectMonth(month) {
      this.month = month;
      this.dateObj = new Date(`${this.year}-${this.month}-${this.day}`);
      if (this.type === "month") {
        this.$emit("selectFinish", {
          year: this.year,
          month: this.month
        });
        return;
      }
      this.optionType = "date";
    },
    selectDay(dateObj) {
      this.day = dateObj.day;
      this.$emit("selectFinish", dateObj);
    },
    prev() {
      if (this.month === 1) {
        this.month = 12;
        this.year--;
      } else {
        this.month--;
      }
      this.dateObj = new Date(`${this.year}-${this.month}-${this.day}`);
    },
    prevMore() {
      switch (this.optionType) {
        case "day":
        case "month":
          this.year--;
          this.dateObj = new Date(`${this.year}-${this.month}-${this.day}`);
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
      this.dateObj = new Date(`${this.year}-${this.month}-${this.day}`);
    },
    nextMore() {
      switch (this.optionType) {
        case "day":
        case "month":
          this.year++;
          this.dateObj = new Date(`${this.year}-${this.month}-${this.day}`);
          break;
        case "year":
          this.year += 10;
          this.createYearList(this.year);
          break;
      }
    }
  },
  created() {
    this.year = this.currYear;
    this.month = this.currMonth;
    this.day = this.currDay;
    this.optionType = this.type;
  }
};
</script>

<style lang="scss" scoped>
$datapicker_optionsWidth: 280px;
.mj-date-picker__panel {
  position: absolute;
  top: 42px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid $black_borderColor;
  background-color: $white;
  font-size: 14px;
  &.mj-date-picker__panel--top {
    transform: translateY(-100%);
    margin-top: -50px;
  }
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
}
</style>
