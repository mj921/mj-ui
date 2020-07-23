<template>
  <div class="mj-doc">
    <div class="mj-doc--title">{{ title }}</div>
    <div class="mj-doc--describe" v-if="describe.length > 0">
      {{ describe }}
    </div>
    <div class="mj-doc--code">
      <div class="mj-doc--demo" ref="demo">
        <slot></slot>
      </div>
      <div class="mj-doc--pre" :class="{ 'mj-doc--pre-hidden': !showCodeFlag }">
        <pre>
          <code ref="code" class="language-html">{{code}}</code>
        </pre>
      </div>
      <div class="mj-doc--option" @click="toggleShow">
        <span>{{ showCodeFlag ? "收起" : "展开" }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import prism from "prismjs";
export default {
  name: "MjDoc",
  data() {
    return {
      showCodeFlag: false,
      code: ""
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    describe: {
      type: String,
      default: ""
    },
    demoUrl: {
      type: [String, Object],
      default: ""
    }
  },
  methods: {
    toggleShow() {
      this.showCodeFlag = !this.showCodeFlag;
    },
    getCode() {
      this.code =
        "\n" +
        this.readFile(
          (process.env.NODE_ENV === "production"
            ? "https://github.com//mj921/mj-ui/master/src/example/"
            : "./src/example/") + this.demoUrl
        );
    },
    readFile(filePath) {
      // 创建一个新的xhr对象
      let xhr = null;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else {
        // eslint-disable-next-line
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
      }
      const okStatus = document.location.protocol === "file" ? 0 : 200;
      xhr.open("GET", filePath, false);
      xhr.overrideMimeType("text/html;charset=utf-8");
      xhr.send(null);
      return xhr.status === okStatus ? xhr.responseText : null;
    }
  },
  mounted() {
    prism.highlightElement(this.$refs.code);
  },
  created() {
    this.getCode();
  }
};
</script>
<style src="@/assets/theme/prism.css"></style>

<style lang="scss" scoped>
.mj-doc {
  .mj-doc--title {
    font-size: 22px;
    font-weight: 400;
    color: #1f2f3d;
    margin: 55px 0 20px;
  }
  .mj-doc--describe {
    margin: 1em 0;
    font-size: 14px;
    line-height: 1.5em;
    color: $textColor;
  }
  .mj-doc--code {
    border: 1px solid $black_borderColor;
    &:hover {
      box-shadow: 0 0 10px 0 $black_borderColor;
    }
  }
  .mj-doc--demo {
    padding: 40px;
  }
  .mj-doc--pre {
    overflow: hidden;
    transition: height 1s linear;
    font-size: 12px;
    &.mj-doc--pre-hidden {
      height: 0;
    }
  }
  .mj-doc--option {
    padding: 20px;
    text-align: center;
    color: $blue;
    cursor: pointer;
    border-top: 1px solid $black_borderColor;
  }
}
</style>
