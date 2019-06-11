<template>
  <div class="home">
    <div class="header"></div>
    <div class="content">
      <div class="menu">
        <mj-menu :default-actived="$route.name">
          <mj-sub-menu>
            <template slot="title">
              基础
            </template>
            <mj-menu-item @click="routerPush('/layout')" index="layout">
              Layout 布局
            </mj-menu-item>
            <mj-menu-item @click="routerPush('/icon')" index="icon">
              Icon 图标
            </mj-menu-item>
            <mj-menu-item @click="routerPush('/button')" index="button">
              Button 按钮
            </mj-menu-item>
          </mj-sub-menu>
          <mj-sub-menu>
            <template slot="title">
              表单
            </template>
            <mj-menu-item @click="routerPush('/checkbox')" index="checkbox">
              Checkbox 多选框
            </mj-menu-item>
            <mj-menu-item @click="routerPush('/datepicker')" index="datepicker">
              Datepicker 日期选择器
            </mj-menu-item>
            <mj-menu-item @click="routerPush('/input')" index="input">
              Input 输入框
            </mj-menu-item>
            <mj-menu-item @click="routerPush('/radio')" index="radio">
              Radio 单选框
            </mj-menu-item>
            <mj-menu-item @click="routerPush('/select')" index="select">
              Select 下拉框
            </mj-menu-item>
            <mj-menu-item @click="routerPush('/switch')" index="switch">
              Switch 开关
            </mj-menu-item>
            <mj-menu-item @click="routerPush('/transfer')" index="transfer">
              Transfer 穿梭框
            </mj-menu-item>
          </mj-sub-menu>
          <mj-sub-menu>
            <template slot="title">
              数据
            </template>
            <mj-menu-item @click="routerPush('/table')" index="table">
              Table 表格
            </mj-menu-item>
            <mj-menu-item @click="routerPush('/tag')" index="tag">
              tag 标签
            </mj-menu-item>
          </mj-sub-menu>
          <mj-sub-menu>
            <template slot="title">
              导航
            </template>
            <mj-menu-item index="menu">Menu 菜单</mj-menu-item>
          </mj-sub-menu>
        </mj-menu>
      </div>
      <router-view class="main"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    routerPush(path) {
      this.$router.push(path);
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  @include box-sizing(border-box);
  padding-top: 80px;
  .header {
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    @include box-sizing(border-box);
    padding-left: 256px;
    .menu {
      position: absolute;
      left: 0;
      top: 0;
      width: 256px;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .main {
      width: 100%;
      height: 100%;
      overflow-y: auto;
      padding-bottom: 20px;
      padding-right: 20px;
      padding-left: 20px;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
    }
  }
}
</style>
