<template>
  <div class="mj-date-picker__years">
    <dl
      v-for="year in yearList"
      :key="'year' + year"
      @click.stop="selectYear(year)"
    >
      {{ year }}
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    year: Number
  },
  data() {
    return {};
  },
  computed: {
    yearList() {
      const yearList = [];
      const startYear = Math.floor(this.year / 10) * 10;
      for (let i = 0; i < 10; i++) {
        yearList.push(startYear + i);
      }
      return yearList;
    }
  },
  methods: {
    selectYear(year) {
      this.$emit("selectFinish", year);
    }
  }
};
</script>
<style lang="scss" scoped>
$yearSize: $datapicker_optionsWidth / 4;
.mj-date-picker__years {
  overflow: hidden;
  width: $datapicker_optionsWidth;
  dl {
    float: left;
    width: $yearSize;
    height: 46px;
    padding: 5px;
    margin: 10px 0;
    text-align: center;
    line-height: 36px;
    @include box-sizing(border-box);
    cursor: pointer;
    &.curr,
    &:hover {
      color: $blue;
    }
  }
}
</style>
