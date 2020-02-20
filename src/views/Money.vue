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

    type Record = {
        tags: string[],
        type: string,
        note: string,
        numpad: number,
        createTime?: Date,
    }

    const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

    @Component({components: {Numpad, Tags, Types, Notes}})
    export default class Money extends Vue {
        tagList: string[] = ['衣', '食', '住', '行', '彩票'];
        record: Record = {tags: [], type: '-', note: '', numpad: 0};
        recordList: Record[] = recordList;

        onGetTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateRecordList() {
            this.record.createTime = new Date();
            const temp = JSON.parse(JSON.stringify(this.record));
            this.recordList.push(temp);
            localStorage.setItem('recordList', JSON.stringify(this.recordList));
        }

    }

</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
