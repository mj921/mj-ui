<template>
  <div class="mj-date-picker__months">
    <dl
      v-for="(month, index) in monthList"
      :key="month"
      @click.stop="selectMonth(index + 1)"
    >
      {{ month }}
    </dl>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    };
  },
  methods: {
    selectMonth(month) {
      this.$emit("selectFinish", month);
    }
  }
};
</script>
<style lang="scss" scoped>
$monthSize: $datapicker_optionsWidth / 4;
.mj-date-picker__months {
  overflow: hidden;
  width: $datapicker_optionsWidth;
  dl {
    float: left;
    width: $monthSize;
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
