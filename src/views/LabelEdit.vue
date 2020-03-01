<template>
    <Layout>
        <div class="top">
            <Icon name="left" class="icon" @click.native="turnBack"></Icon>
            <span>编辑标签</span>
            <div class="icon"></div>
        </div>
        <div class="labelInfo">
            <FormItem :name="`标签名`" :value="name" class="formItem"></FormItem>
        </div>
        <div class="button-wrapper">
            <Button class="button">删除标签</Button>
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

        turnBack(){
            this.$router.back()
        }

        created() {
            const id = this.$route.params.id;
            const tags = modelTags.data;
            this.name = tags.filter(item=>item.id===id)[0].name
        }

    }
</script>

<style scoped lang="scss">
    .top{
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px;
        font-size: 16px;
        color:#333;

        .icon{
            width: 20px;
            height: 20px;
        }
    }
    
    .labelInfo{
        background-color: #fff;
        margin-top: 8px;
        padding: 2px 0 ;
        .formItem{
            background-color: #fff;
        }
    }
    .button-wrapper{
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
        .button {
            background-color: red;
        }
    }

</style>