<template>
    <div>
        <Layout>
            <Tabs :data-source="dataSource" :value.sync="value"/>
            <ol>
                <li class="items-container" v-for="(group,key) in result" :key="key">
                    <h3>{{group.title}}<span>￥{{group.total.toString()}}</span></h3>
                    <ol class="item-body">
                        <li class="item-each" v-for="(item,index) in group.item" :key="index">
                            <span class="item-tag">{{tagString(item.tags)}}</span>
                            <span class="item-note">{{item.note?item.note:''}}</span>
                            <span class="item-amount">￥{{item.numpad}}</span>
                        </li>
                    </ol>
                </li>
            </ol>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import recordTypeList from '@/constants/recordTypeList';
    import cloneObj from '@/models/cloneObj';
    import dayjs from 'dayjs';


    @Component({
        components: {Tabs}
    })
    export default class Statistics extends Vue {
        dataSource = recordTypeList;
        value = '-';


        get recordList(): RecordItem[] {
            return this.$store.state.recordList;
        }

        get result() {
            return this.sortRecordList();
        }

        created() {
            this.$store.commit('getRecordList');
            this.sortRecordList();
        }


        sortRecordList() {
            let temp: RecordItem[] = cloneObj(this.recordList);
            temp.sort((a, b) => {
                return (dayjs(b.createTime).valueOf() - dayjs(a.createTime).valueOf());
            });
            // [{title:2020-03-24,item:[{record1},{record2}...]},{title...}]
            if(temp.length>0){
                let result: ResultItem[] = [
                    {
                        title: dayjs(temp[0].createTime).format('YYYY-M-D'),
                        item: [temp[0]],
                        total: temp[0].numpad
                    }
                ];
                for (let i = 1; i < temp.length; i++) {
                    const current = temp[i];
                    const lastResult = result[result.length - 1];
                    if (dayjs(current.createTime).isSame(dayjs(lastResult.title), 'date')) {
                        lastResult.item.push(current);
                        lastResult.total! += current.numpad;
                    } else {
                        result.push({
                            title: dayjs(current.createTime).format('YYYY-M-D'),
                            item: [current],
                            total: current.numpad
                        });
                    }
                }
                console.log(result);
                return result;
            }

        }

        tagString(tag: Tag[]) {
            return tag.length === 0 ? '无' : tag.map(item=>item.name).join(',')
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

        ::v-deep .selected {
            background-color: #fff;
        }
    }

    .items-container {
        $font-size: 17px;

        h3 {
            display: flex;
            justify-content: space-between;
            margin: 9px 16px;
            font-size: $font-size;

            span {
                font-size: inherit;
            }
        }

        .item-body {
            background-color: #fff;
            padding: 9px 16px;

            span {
                font-size: $font-size;
            }

            .item-each {
                display: flex;
                justify-content: space-between;
            }

            .item-note {
                margin-right: auto;
                padding-left: 13px;
                color: #999;
            }

        }
    }
</style>