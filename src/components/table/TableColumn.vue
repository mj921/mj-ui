<template>
    <div></div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Prop, Inject } from 'vue-property-decorator';
@Component
export default class MjTableColumn extends Vue {
    @Prop({type: String})
    prop!: string;
    @Prop({type: String})
    label!: string;
    @Prop({type: String})
    width!: string;
    @Prop({type: String})
    minWidth!: string;
    @Inject({default: undefined})
    addColumn!: (column: MjTableColumn) => void;
    created() {
        this.addColumn && this.addColumn(this);
    }
}
</script>
<style lang="scss" scoped>

</style>
