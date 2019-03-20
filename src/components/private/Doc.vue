<template>
    <div class="mj-doc">
        <div class="mj-doc--title">{{title}}</div>
        <div class="mj-doc--describe" v-if="describe.length > 0">{{describe}}</div>
        <div class="mj-doc--code">
            <div class="mj-doc--slot">
                <slot></slot>
            </div>
            <div class="mj-doc--pre" :class="{'mj-doc--pre-hidden': !showCodeFlag}">
                <pre>
                    <code ref="code" class="language-html">{{code}}</code>
                </pre>
            </div>
            <div class="mj-doc--option" @click="toggleShow">
                <span>{{showCodeFlag ? "收起" : "展开"}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import prism from 'prismjs';
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';

@Component
export default class Doc extends Vue {
    showCodeFlag = false;
    @Prop({type: String, default: ""})
    title!: string;
    @Prop({type: String, default: ""})
    describe!: string;
    @Prop({type: String, default: ""})
    code!: string;
    toggleShow () {
        this.showCodeFlag = !this.showCodeFlag;
    }
    mounted() {
        prism.highlightElement(this.$refs.code as Element);
    }
}
</script>
<style src="@/assets/theme/prism.css"></style>

<style lang="scss" scoped>
.mj-doc{
    .mj-doc--title{
        font-size: 22px;
        font-weight: 400;
        color: #1f2f3d;
        margin: 55px 0 20px;
    }
    .mj-doc--describe{
        margin: 1em 0;
        font-size: 14px;
        line-height: 1.5em;
        color: $textColor;
    }
    .mj-doc--code{
        border: 1px solid $borderColor;
        &:hover{
            box-shadow: 0 0 10px 0 $borderColor;
        }
    }
    .mj-doc--slot{
        padding: 40px;
    }
    .mj-doc--pre{
        overflow: hidden;
        transition: height 1s linear;
        font-size: 12px;
        &.mj-doc--pre-hidden{
            height: 0;
        }
    }
    .mj-doc--option{
        padding: 20px;
        text-align: center;
        color: $blue;
        cursor: pointer;
        border-top: 1px solid $borderColor;
    }
}
</style>
