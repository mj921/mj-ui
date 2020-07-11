<template>
  <div class="mj-date-picker">
    <mj-input ref="reference" :value="displayValue" @click="togglePanelShow" />
    <picker-panel
      append-to-body
      :reference="$refs.reference"
      :show-popper="panelVisible"
      :curr-year="currYear"
      :curr-month="currMonth"
      :curr-day="currDay"
      :value-date="valueDate"
      @selectFinish="selectFinish"
    />
  </div>
</template>

<script>
import PickerPanel from "./PickerPanel";
import { dateFmt } from "../utils";
export default {
  name: "MjDatePicker",
  components: {
    PickerPanel
  },
  props: {
    value: {
      type: [String, Number, Date],
      required: true
    },
    valueFormat: {
      type: String,
      default: ""
    },
    format: {
      type: String,
      default: "yyyy-MM-dd"
    }
  },
  data() {
    return {
      valueDate: null,
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
      optionType: "day",
      displayValue: ""
    };
  },
  methods: {
    togglePanelShow() {
      this.panelVisible = !this.panelVisible;
    },
    selectFinish(dateObj) {
      this.currYear = dateObj.year;
      this.currMonth = dateObj.month;
      this.currDay = dateObj.day;
      this.panelVisible = false;
      this.setValue();
    },
    setValue() {
      const dateObj = new Date(
        `${this.currYear}-${this.currMonth}-${this.currDay}`
      );
      this.displayValue = dateFmt(dateObj, this.format);
      this.$emit(
        "input",
        this.valueFormat ? dateFmt(dateObj, this.valueFormat) : dateObj
      );
    }
  },
  created() {
    this.valueDate = this.value
      ? this.value instanceof Date
        ? this.value
        : new Date(this.value)
      : new Date();
    this.currYear = this.valueDate.getFullYear();
    this.currMonth = this.valueDate.getMonth() + 1;
    this.currDay = this.valueDate.getDate();
  }
};
</script>

<style lang="scss" scoped>
.mj-date-picker {
  position: relative;
}
</style>
