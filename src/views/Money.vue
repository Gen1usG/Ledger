<template>
    <div>
        <Layout class-prefix="layout">
            <Numpad :value.sync="record.numpad" @update:recordList="onUpdateRecordList"/>
            <Tabs :data-source="dataSource" :value.sync="record.type"/>
            <Notes :value.sync="record.note"/>
            <Tags :value.sync="record.tags" :selectedTags.sync="selectedTags"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from "@/components/Money/Tags.vue";
    import Notes from "@/components/Money/Notes.vue";
    import Numpad from "@/components/Money/Numpad.vue";
    import cloneObj from '@/models/cloneObj';
    import recordTypeList from '@/constants/recordTypeList';
    import Tabs from '@/components/Tabs.vue';


    @Component({components: {Tabs, Numpad, Tags, Notes}})
    export default class Money extends Vue {
        record: RecordItem = {tags: [], type: '-', note: '', numpad: 0};
        dataSource = recordTypeList;
        selectedTags: Tag[] = [];

        get recordList() {
            return this.$store.state.recordList;
        }

        onUpdateRecordList() {
            this.record.createTime = new Date().toISOString();
            const temp = cloneObj(this.record);
            this.recordList.push(temp);
            this.$store.commit('saveRecordList', this.recordList);
            this.record.note = '';
            this.selectedTags = [];
        }


    }

</script>

<style lang="scss">
    .layout-content {
        background-color: #fff !important;
        display: flex;
        flex-direction: column-reverse;
    }
</style>
