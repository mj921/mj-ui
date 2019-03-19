<template>
    <div class="home">
        <div class="header"></div>
        <div class="content">
            <div class="menu">
                <mj-menu :default-actived="$route.name">
                    <mj-sub-menu>
                        <template slot="title">基础</template>
                        <mj-menu-item @click="routerPush('/layout')" index="layout">Layout 布局</mj-menu-item>
                        <mj-menu-item @click="routerPush('/button')" index="button">Button 按钮</mj-menu-item>
                    </mj-sub-menu>
                    <mj-sub-menu>
                        <template slot="title">表单</template>
                        <mj-menu-item @click="routerPush('/radio')" index="radio">Radio 单选框</mj-menu-item>
                        <mj-menu-item @click="routerPush('/switch')" index="switch">Switch 开关</mj-menu-item>
                        <mj-menu-item @click="routerPush('/transfer')" index="transfer">Transfer 穿梭框</mj-menu-item>
                    </mj-sub-menu>
                    <mj-sub-menu>
                        <template slot="title">数据</template>
                        <mj-menu-item @click="routerPush('/table')" index="table">Table 表格</mj-menu-item>
                    </mj-sub-menu>
                    <mj-sub-menu>
                        <template slot="title">导航</template>
                        <mj-menu-item index="menu">Menu 菜单</mj-menu-item>
                    </mj-sub-menu>
                </mj-menu>
            </div>
            <router-view class="main"></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
    components: {}
})
export default class Home extends Vue {
    routerPush(path: string) {
        this.$router.push(path);
    }
}
</script>
<style lang="scss" scoped>
.home{
    position: absolute;
    width: 100%;
    height: 100%;
    @include box-sizing(border-box);
    padding-top: 80px;
    .header{
        position: absolute;
        top: 0;
        left: 0;
        height: 80px;
    }
    .content{
        position: relative;
        width: 100%;
        height: 100%;
        @include box-sizing(border-box);
        padding-left: 200px;
        .menu{
            position: absolute;
            left: 0;
            top: 0;
            width: 200px;
            overflow-x: hidden;
            overflow-y: auto;
        }
        .main{
            width: 100%;
            height: 100%;
            overflow: auto;
            padding-bottom: 20px;
            padding-right: 20px;
            box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }
    }
}
</style>
