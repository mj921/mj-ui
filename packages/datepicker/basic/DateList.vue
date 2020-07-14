<template>
  <div class="mj-date-picker__days">
    <dt>
      <dl>日</dl>
      <dl>一</dl>
      <dl>二</dl>
      <dl>三</dl>
      <dl>四</dl>
      <dl>五</dl>
      <dl>六</dl>
    </dt>
    <div class="mj-date-picker__days-list">
      <dl
        v-for="item in dayList"
        :key="item.type + item.num"
        :class="{
          'prev-month': item.type === 'prev',
          'next-month': item.type === 'next',
          curr: year === currYear && month === currMonth && item.num === currDay
        }"
        @click.stop="selectDay(item)"
      >
        {{ item.num }}
      </dl>
    </div>
  </div>
</template>

<script>
export default {
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
    date: Date
  },
  data() {
    return {
      // dayList: [],
      dateVolume: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      day: 2
    };
  },
  computed: {
    year() {
      return this.date instanceof Date ? this.date.getFullYear() : 0;
    },
    month() {
      return this.date instanceof Date ? this.date.getMonth() + 1 : 0;
    },
    dayList() {
      const dayList = [];
      const date = this.date;
      let volume, prevVolumem;
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
      return dayList;
    }
  },
  methods: {
    selectDay(day) {
      let year = this.year;
      let month = this.month;
      this.day = day.num;
      if (day.type === "prev") {
        if (month === 1) {
          month = 12;
          year--;
        } else {
          month--;
        }
      } else if (day.type === "next") {
        if (month === 12) {
          month = 1;
          year++;
        } else {
          month++;
        }
      }
      this.$emit("selectFinish", {
        year: year,
        month: month,
        day: this.day
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$daySize: $datapicker_optionsWidth / 7;
.mj-date-picker__days {
  margin: 15px;
  width: $datapicker_optionsWidth;
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
      @include box-sizing(border-box);
    }
  }
  .mj-date-picker__days-list {
    overflow: hidden;
    width: 100%;
    dl {
      float: left;
      width: $daySize;
      height: $daySize;
      padding: 5px;
      text-align: center;
      line-height: $daySize - 10px;
      @include box-sizing(border-box);
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
}
</style>
