<template>
    <ul class="tabs">
        <li v-for="item in dataSource" :key="item.value" :class="{selected:item.value===value}" @click="selected(item)">{{item.text}}</li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    type DataSourceItem = {text:string,value:string}
    @Component
    export default class Tabs extends Vue {
        @Prop({required:true,type:Array}) dataSource!: DataSourceItem[];
        @Prop({required:true}) value!: string;

        selected(item:DataSourceItem){
            this.$emit('update:value',item.value);
        }
    }
</script>

<style scoped lang="scss">
    .tabs {
        display: flex;

        > li {
            width: 50vw;
            background-color: #C4C4C4;
            text-align: center;
            font-size: 24px;
            padding: 17px 0;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                border: 2px solid #333;
            }
        }
    }
</style>