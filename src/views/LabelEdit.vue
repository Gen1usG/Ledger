<template>
    <Layout>
        <div class="top">
            <Icon name="left" class="icon" @click.native="turnBack"></Icon>
            <span>编辑标签</span>
            <div class="icon"></div>
        </div>
        <div class="labelInfo">
            <FormItem :name="`标签名`" :value="name" @update:value="update" class="formItem"></FormItem>
        </div>
        <div class="button-wrapper">
            <Button class="button" @click.native="remove">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Icon from '@/components/Icon.vue';
    import Button from '@/components/Button.vue';
    import FormItem from '@/components/FormItem.vue';
    import Layout from '@/components/Layout.vue';
    import modelTags from '@/models/modelTags';

    modelTags.getTags();
    @Component({
        components: {FormItem, Button, Icon, Layout}
    })
    export default class LabelEdit extends Vue {
        name: string = '';
        tags = modelTags.data;

        turnBack() {
            this.$router.back();
        }

        created() {
            const id = this.$route.params.id;
            this.name = this.tags.filter(item => item.id === id)[0].name;
        }

        remove() {
            const tag = this.tags.filter(item => item.id === this.$route.params.id)[0];
            modelTags.removeTag(tag);
            this.$router.replace('/label');
        }

        update(ev: any) {
            const newName = ev.target.value;
            const id = this.$route.params.id;
            modelTags.update(newName,id)
        }

    }
</script>

<style scoped lang="scss">
    .top {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px;
        font-size: 16px;
        color: #333;

        .icon {
            width: 20px;
            height: 20px;
        }
    }

    .labelInfo {
        background-color: #fff;
        margin-top: 8px;
        padding: 2px 0;

        .formItem {
            background-color: #fff;
        }
    }

    .button-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;

        .button {
            background-color: red;
        }
    }

</style>