<template>
    <div>
        <Layout>
            <Tabs :data-source="dataSource" :value.sync="value"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';
    @Component({
        components: {Tabs}
    })
    export default class Statistics extends Vue {
        dataSource = recordTypeList;
        value='-';

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
        ::v-deep .selected{
            background-color: #fff;
        }
    }
</style>