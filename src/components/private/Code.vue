<template>
    <div>
        <pre><slot></slot></pre>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Code extends Vue {
    created() {
        console.log(this.$slots)
    }
}
</script>
