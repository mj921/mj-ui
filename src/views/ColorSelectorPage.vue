<template>
  <div>
    <div class="mj-page-title1">ColorSelector 颜色选择器</div>
    <mj-demo
      v-for="(demo, i) in demoList"
      :key="i"
      :title="demo.title"
      :describe="demo.describe"
      :demo-url="demo.demoUrl"
    >
      <component :is="demo.demoComp"></component>
    </mj-demo>
    <div class="mj-page-title2">ColorSelector 属性</div>
    <mj-api-table :data="colorSelectorAttr" />
    <div class="mj-page-title2">ColorSelector 事件</div>
    <mj-api-table :data="colorSelectorEvent" type="event" />
  </div>
</template>
<script>
import ColorSelectorDemo1 from "../example/colorSelector/ColorSelectorDemo1";

export default {
  name: "ChackboxPage",
  components: {
    ColorSelectorDemo1
  },
  data() {
    return {
      demoList: [
        {
          title: "基础用法",
          describe: "基础的颜色选择器",
          demoUrl: "colorSelector/ColorSelectorDemo1.vue",
          demoComp: ColorSelectorDemo1
        }
      ],
      colorSelectorAttr: [
        {
          prop: "v-model / value",
          desc: "颜色值(hex格式)",
          type: "string",
          optional: "—",
          defaultVal: "#000000"
        },
        {
          prop: "default-colors",
          desc: "颜色备选列表",
          type: "string[]",
          optional: "—",
          defaultVal: `[
            "#000000",
            "#ffffff",
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#ffff00",
            "#ff00ff",
            "#00ffff",
            "#333333",
            "#666666",
            "#999999",
            "#aaaaaa",
            "#cccccc",
            "#dddddd",
            "#eeeeee",
            "#808080",
            "#fefefe",
            "#4b8cf0",
            "#123456",
            "#199221"
          ]`
        }
      ],
      colorSelectorEvent: [
        {
          event: "change",
          desc: "颜色发生改变时触发",
          callback: "当前颜色"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped></style>
