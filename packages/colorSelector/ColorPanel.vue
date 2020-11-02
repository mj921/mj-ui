<template>
  <transition name="fade">
    <div class="mj-color-panel" v-show="visible" @click.stop>
      <div class="mj-color-panel__default">
        <dl
          v-for="i in Math.ceil(defaultColors.length / 10)"
          :data-i="i"
          :key="'defColorRow' + i"
        >
          <dd
            v-for="(item, j) in defaultColors.slice(i * 10 - 10, i * 10)"
            :key="'defaultColor' + j"
            :style="{ backgroundColor: item }"
            @click="selectDefColor(item)"
          ></dd>
        </dl>
      </div>
      <div class="mj-color-panel__selector">
        <div
          class="mj-color-panel__selector--left"
          :style="{ backgroundColor: backgroundColor }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
          >
            <defs>
              <linearGradient
                id="gradient-black"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#000000" stop-opacity="1"></stop>
                <stop
                  offset="100%"
                  stop-color="#CC9A81"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
              <linearGradient
                id="gradient-white"
                x1="0%"
                y1="100%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stop-color="#FFFFFF" stop-opacity="1"></stop>
                <stop
                  offset="100%"
                  stop-color="#CC9A81"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#gradient-white)"
            ></rect>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#gradient-black)"
              data-spm-anchor-id="a313x.7781069.0.i2"
            ></rect>
          </svg>
          <div
            class="mj-color-panel__selector--left-pos"
            :style="{
              left: currX + 'px',
              top: currY + 'px'
            }"
          ></div>
          <div
            class="mj-color-panel__selector--left-click"
            @click="seletLeft"
          ></div>
        </div>
        <div class="mj-color-panel__selector--right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100%"
            height="100%"
          >
            <defs>
              <linearGradient
                id="gradient-hsv"
                x1="0%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop offset="0%" stop-color="#FF0000" stop-opacity="1"></stop>
                <stop offset="13%" stop-color="#FF00FF" stop-opacity="1"></stop>
                <stop offset="25%" stop-color="#8000FF" stop-opacity="1"></stop>
                <stop offset="38%" stop-color="#0040FF" stop-opacity="1"></stop>
                <stop offset="50%" stop-color="#00FFFF" stop-opacity="1"></stop>
                <stop offset="63%" stop-color="#00FF40" stop-opacity="1"></stop>
                <stop offset="75%" stop-color="#0BED00" stop-opacity="1"></stop>
                <stop offset="88%" stop-color="#FFFF00" stop-opacity="1"></stop>
                <stop
                  offset="100%"
                  stop-color="#FF0000"
                  stop-opacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#gradient-hsv)"
            ></rect>
          </svg>
          <div
            class="mj-color-panel__selector--right-pos"
            :style="{
              top: (currH / 360) * 220 + 'px'
            }"
          ></div>
          <div
            class="mj-color-panel__selector--right-click"
            @click="seletRight"
          ></div>
        </div>
      </div>
      <div class="mj-color-panel__bottom">
        <div
          class="mj-color-panel__bottom--current"
          :style="{
            backgroundColor: currColor
          }"
        ></div>
        <div class="mj-color-panel__bottom--text">
          {{ currColorHex }}
        </div>
        <mj-button @click="confirm">确定</mj-button>
      </div>
    </div>
  </transition>
</template>

<script>
import Popper from "../utils/popper";
const NewPopper = {
  ...Popper,
  props: {
    ...Popper.props,
    mask: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    defaultColors: {
      type: Array,
      default: () => []
    }
  }
};
export default {
  mixins: [NewPopper],
  props: {
    color: {
      type: String,
      validator(val) {
        return /^#[0-9a-f]{6}$/.test(val);
      },
      default: "#000000"
    }
  },
  data() {
    return {
      currH: 0,
      currS: 100,
      currL: 0,
      currX: 220,
      currY: 220
    };
  },
  watch: {
    color() {
      this.rgbToHsl.apply(this, this.hexToRgb(this.color));
    }
  },
  computed: {
    currColor: {
      get() {
        return `hsl(${this.currH}, ${this.currS}%, ${this.currL}%)`;
      },
      set(hsl) {
        if (
          typeof hsl === "string" &&
          /^hsl\(\d{1,3},\s*\d{1,2}%,\s*\d{1,2}%\)$/.test(hsl)
        ) {
          let [S, L] = hsl
            .match(/^hsl\(\d{1,3},\s*(\d{1,2})%,\s*(\d{1,2})%\)$/)
            .slice(1)
            .map(parseFloat);
          S /= 100;
          L /= 100;
          let l = L * 2;
          let r = l <= 1 ? l : 2 - l;
          let n, v, s, x, y;
          if (S <= 1e-9) {
            x = 0;
            n = 0;
            v = (l + n) / 2;
            y = 220 - v * 220;
          } else {
            n = r * S;
            v = (l + n) / 2;
            s = n / ((L * 2 + n) / 2);
            x = 220 * s;
            y = 220 - v * 220;
          }
          this.currX = x;
          this.currY = y;
        }
      }
    },
    currColorHex() {
      let r, g, b;
      const l = this.currL / 100;
      const s = this.currS / 100;
      const h = this.currH / 360;
      if (s === 0) {
        r = g = b = l;
      } else {
        var hue2rgb = function hue2rgb(p, q, t) {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      r = Math.round(r * 255);
      g = Math.round(g * 255);
      b = Math.round(b * 255);
      const _t = n => ("0" + n.toString(16)).slice(-2);
      return `#${_t(r)}${_t(g)}${_t(b)}`;
    },
    backgroundColor() {
      return `hsl(${this.currH}, 100%, 50%)`;
    }
  },
  methods: {
    seletLeft(e) {
      this.currX = e.offsetX;
      this.currY = e.offsetY;
      let v = 1 - e.offsetY / 220;
      let s = e.offsetX / 220;
      let n = v * s;
      let l = v * (2 - s);
      let r = l <= 1 ? l : 2 - l;
      this.currS = (r < 1e-9 ? 0 : n / r) * 100;
      this.currL = (l / 2) * 100;
    },
    seletRight(e) {
      this.currH = (e.offsetY / 220) * 360;
    },
    rgbToHsl(r, g, b) {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h, s, l;
      if (max === min) {
        h = 0;
      } else if (max === r && g >= b) {
        h = (60 * (g - b)) / (max - min);
      } else if (max === r && g < b) {
        h = (60 * (g - b)) / (max - min) + 360;
      } else if (max === g) {
        h = (60 * (b - r)) / (max - min) + 120;
      } else if (max === b) {
        h = (60 * (r - g)) / (max - min) + 240;
      }
      l = (max + min) / 2;
      if (max === min || l === 0) {
        s = 0;
      } else if (l > 0 && l <= 0.5) {
        s = (max - min) / 2 / l;
      } else if (l > 0.5) {
        s = (max - min) / (2 - 2 * l);
      }
      this.currH = h;
      this.currS = s * 100;
      this.currL = l * 100;
      this.getPosition();
    },
    getPosition() {
      let l = (this.currL / 100) * 2;
      let r = l <= 1 ? l : 2 - l;
      let n, v, s;
      if (r > 1e-9) {
        n = (this.currS / 100) * r;
        v = (l + n) / 2;
        s = n / v;
        this.currX = s * 220;
        this.currY = (1 - v) * 220;
      } else {
        if (l === 0) {
          this.currX = 0;
          this.currY = 220;
        } else {
          this.currX = 0;
          this.currY = 0;
        }
      }
    },
    hexToRgb(hex) {
      return [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16)
      ];
    },
    selectDefColor(color) {
      this.rgbToHsl.apply(this, this.hexToRgb(color));
    },
    confirm() {
      this.$emit("select-color", this.currColorHex);
      this.$emit("update:visible", false);
    }
  },
  created() {
    this.rgbToHsl.apply(this, this.hexToRgb(this.color));
  }
};
</script>

<style lang="scss" scoped>
.mj-color-panel {
  position: absolute;
  top: 45px;
  left: 0;
  width: 281px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba($color: #000000, $alpha: 0.1);
  background-color: #fff;
  box-sizing: border-box;
  &.fade-enter-active,
  &.fade-leave-active {
    transition: opacity 0.5s ease;
  }
  &.fade-enter,
  &.fade-leave-to {
    opacity: 0;
  }
  &__default {
    display: table;
    border-collapse: collapse;
    margin-bottom: 10px;
    dl {
      display: table-row;
      dd {
        display: table-cell;
        width: 25px;
        height: 25px;
        border: 1px solid #000;
        cursor: default;
      }
    }
  }
  &__selector {
    display: flex;
    &--left {
      position: relative;
      width: 220px;
      height: 220px;
      margin-right: 10px;
      flex-shrink: 0;
      &-pos {
        position: absolute;
        width: 10px;
        height: 10px;
        margin: -5px 0 0 -5px;
        border-radius: 5px;
        box-sizing: border-box;
        border: 1px solid #fff;
        background-color: transparent;
      }
      &-click {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    &--right {
      position: relative;
      width: 30px;
      height: 220px;
      &-pos {
        position: absolute;
        width: 6px;
        height: 6px;
        right: 0;
        top: 0;
        margin-top: -15px;
        border-radius: 3px;
        box-sizing: border-box;
        border: 15px solid transparent;
        border-right-color: #000;
      }
      &-click {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  &__bottom {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    &--current {
      width: 80px;
      height: 32px;
      border: 1px solid $black_borderColor;
      box-sizing: border-box;
    }
    &--text {
      width: 80px;
      height: 32px;
      border: 1px solid $black_borderColor;
      box-sizing: border-box;
      font-size: 12px;
      color: $black_titleColor;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;
    }
  }
}
</style>
