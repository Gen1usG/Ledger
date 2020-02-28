<template>
    <div>
        <Layout class-prefix="layout">
            <Numpad :value.sync="record.numpad" @update:recordList="onUpdateRecordList"/>
            <Types :value.sync="record.type"/>
            <Notes :value.sync="record.note"/>
            <Tags :tagList.sync="tagList" @update:value="onGetTags"/>
        </Layout>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from "@/components/Money/Tags.vue";
    import Types from "@/components/Money/Types.vue";
    import Notes from "@/components/Money/Notes.vue";
    import Numpad from "@/components/Money/Numpad.vue";
    import modelRecordList from '@/models/modelRecordList.ts'


    @Component({components: {Numpad, Tags, Types, Notes}})
    export default class Money extends Vue {
        tagList: string[] = ['衣', '食', '住', '行', '彩票'];
        record: RecordItem = {tags: [], type: '-', note: '', numpad: 0};
        recordList = modelRecordList.getRecordList();

        onGetTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateRecordList() {
            console.log(this.recordList);
            this.record.createTime = new Date();
            const temp = modelRecordList.clone(this.record);
            this.recordList.push(temp);
            modelRecordList.setRecordList(this.recordList);
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
