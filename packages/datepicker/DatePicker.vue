<template>
  <div class="mj-date-picker" ref="datePickerRoot" v-clickoutsit="handlerClose">
    <mj-input ref="reference" :value="displayValue" @click="togglePanelShow" />
    <picker-panel
      :reference="$refs.reference"
      :visible.sync="panelVisible"
      :mask="false"
      :curr-year="currYear"
      :curr-month="currMonth"
      :curr-day="currDay"
      :value-date="valueDate"
      :type="type"
      @selectFinish="selectFinish"
    />
  </div>
</template>

<script>
import PickerPanel from "./PickerPanel";
import clickoutsit from "../utils/directives/clickoutsit";
import { dateFmt } from "../utils";
export default {
  name: "MjDatePicker",
  components: {
    PickerPanel
  },
  directives: {
    clickoutsit
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
    },
    type: {
      type: String,
      default: "date",
      validator(val) {
        return ["date", "month", "year"].indexOf(val) > -1;
      }
    }
  },
  data() {
    return {
      valueDate: null,
      panelVisible: false,
      currYear: 1992,
      currDay: 21,
      currMonth: 9,
      displayValue: ""
    };
  },
  methods: {
    togglePanelShow() {
      if (this.panelVisible) {
        this.$refs.datePickerRoot.focus();
      }
      this.panelVisible = !this.panelVisible;
    },
    selectFinish(dateObj) {
      this.currYear = dateObj.year;
      if (this.type === "year") {
        this.currMonth = 1;
        this.currDay = 1;
      } else {
        this.currMonth = dateObj.month;
        if (this.type === "month") {
          this.currDay = 1;
        } else {
          this.currDay = dateObj.day;
        }
      }
      this.panelVisible = false;
      this.setValue();
    },
    setValue() {
      const dateObj = new Date(
        `${this.currYear}-${this.currMonth}-${this.currDay}`
      );
      this.displayValue = dateFmt(dateObj, this.format);
      const oldVal = this.value;
      this.$emit(
        "input",
        this.valueFormat ? dateFmt(dateObj, this.valueFormat) : dateObj
      );
      this.$emit("change", this.value, oldVal);
    },
    handlerClose() {
      this.panelVisible = false;
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
