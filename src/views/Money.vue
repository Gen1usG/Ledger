<template>
    <div>
        <Layout class-prefix="layout">
            <Numpad :value.sync="record.numpad" @update:recordList="onUpdateRecordList"/>
            <Types :value.sync="record.type"/>
            <Notes :value.sync="record.note"/>
            <Tags @update:value="onGetTags"/>
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
    import cloneObj from '@/models/cloneObj';


    @Component({components: {Numpad, Tags, Types, Notes}})
    export default class Money extends Vue {
        record: RecordItem = {tags: [], type: '-', note: '', numpad: 0};

        get recordList() {
            return this.$store.state.recordList;
        }

        onGetTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateRecordList() {
            console.log(this.recordList);
            this.record.createTime = new Date();
            const temp = cloneObj(this.record);
            this.recordList.push(temp);
            this.$store.commit('saveRecordList', this.recordList);
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
