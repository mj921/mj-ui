<template>
  <div class="box">
    <div class="top">
      <mj-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="top-start"
      >
        <mj-button>上左</mj-button>
      </mj-tooltip>
      <mj-tooltip
        class="item"
        effect="dark"
        content="Top Center 提示文字"
        placement="top"
      >
        <mj-button>上边</mj-button>
      </mj-tooltip>
      <mj-tooltip
        class="item"
        effect="dark"
        content="Top Right 提示文字"
        placement="top-end"
      >
        <mj-button>上右</mj-button>
      </mj-tooltip>
    </div>
    <div class="left">
      <mj-tooltip
        class="item"
        effect="dark"
        content="Left Top 提示文字"
        placement="left-start"
      >
        <mj-button>左上</mj-button>
      </mj-tooltip>
      <mj-tooltip
        class="item"
        effect="dark"
        content="Left Center 提示文字"
        placement="left"
      >
        <mj-button>左边</mj-button>
      </mj-tooltip>
      <mj-tooltip
        class="item"
        effect="dark"
        content="Left Bottom 提示文字"
        placement="left-end"
      >
        <mj-button>左下</mj-button>
      </mj-tooltip>
    </div>

    <div class="right">
      <mj-tooltip
        class="item"
        effect="dark"
        content="Right Top 提示文字"
        placement="right-start"
      >
        <mj-button>右上</mj-button>
      </mj-tooltip>
      <mj-tooltip
        class="item"
        effect="dark"
        content="Right Center 提示文字"
        placement="right"
      >
        <mj-button>右边</mj-button>
      </mj-tooltip>
      <mj-tooltip
        class="item"
        effect="dark"
        content="Right Bottom 提示文字"
        placement="right-end"
      >
        <mj-button>右下</mj-button>
      </mj-tooltip>
    </div>
    <div class="bottom">
      <mj-tooltip
        class="item"
        effect="dark"
        content="Bottom Left 提示文字"
        placement="bottom-start"
      >
        <mj-button>下左</mj-button>
      </mj-tooltip>
      <mj-tooltip
        class="item"
        effect="dark"
        content="Bottom Center 提示文字"
        placement="bottom"
      >
        <mj-button>下边</mj-button>
      </mj-tooltip>
      <mj-tooltip
        class="item"
        effect="dark"
        content="Bottom Right 提示文字"
        placement="bottom-end"
      >
        <mj-button>下右</mj-button>
      </mj-tooltip>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box {
  width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }
}
</style>
