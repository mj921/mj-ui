<template>
  <div>
    <div class="mj-page-title1">icon</div>
    <div class="icons">
      <dl>
        <i class="mj-icon-drop-down"></i>
        <span>mj-icon-drop-down</span>
      </dl>
      <dl>
        <i class="mj-icon-drop-up"></i>
        <span>mj-icon-drop-up</span>
      </dl>
      <dl>
        <i class="mj-icon-left"></i>
        <span>mj-icon-left</span>
      </dl>
      <dl>
        <i class="mj-icon-right"></i>
        <span>mj-icon-right</span>
      </dl>
      <dl>
        <i class="mj-icon-close"></i>
        <span>mj-icon-close</span>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: "IconPage"
};
</script>
<style lang="scss" scoped>
.icons {
  overflow: hidden;
  padding-top: 20px;
  dl {
    float: left;
    width: 128px;
    border: 1px solid $borderColor;
    color: gray;
    &:hover {
      color: $blue;
    }
    i {
      display: block;
      height: 72px;
      font-size: 32px;
      text-align: center;
      line-height: 72px;
    }
    span {
      width: 100%;
      line-height: 38px;
      font-size: 12px;
      text-align: center;
      display: inline-block;
      padding-bottom: 10px;
    }
  }
}
</style>
