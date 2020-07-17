<template>
  <div>
    <mj-button @click="openNotifPos('top-right')">右上角</mj-button>
    <mj-button @click="openNotifPos('top-left')">左上角</mj-button>
    <mj-button @click="openNotifPos('bottom-right')">右下角</mj-button>
    <mj-button @click="openNotifPos('bottom-left')">左下角</mj-button>
  </div>
</template>

<script>
export default {
  methods: {
    openNotifPos(position) {
      this.$notification({
        title: "通知标题",
        message: "通知内容通知内容通知内容通知内容",
        duration: 3000,
        position
      });
    }
  }
};
</script>

<style></style>
