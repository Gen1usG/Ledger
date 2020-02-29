<template>
    <Layout>
        <div class="label-wrapper">
            <ul class='tags-wrapper'>
                <li v-for="tag in tags" :key="tag.id">
                    <div>
                        <span>{{tag.name}}</span>
                        <Icon name="right" class="right-icon"/>
                    </div>
                </li>
            </ul>
            <div class="button-wrapper">
                <button @click="createTag">新建标签</button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Icon from '@/components/Icon.vue';
    import modelTags from '@/models/modelTags';

    modelTags.getTags();
    @Component({
        components: {Icon}
    })
    export default class Label extends Vue {
        tags = modelTags.data;

        // createTag = modelTags.createTag;
        createTag() {
            const newName = window.prompt('请输入标签名') as string;
            const message = modelTags.createTag(newName);
            if(message==='duplicated'){
                alert('已存在该标签')
            }else if(message==='success'){
                alert('添加标签成功')
            }
        }
    }
</script>

<style scoped lang="scss">
    .tags-wrapper {
        position: relative;
        background-color: #fff;
        font-size: 16px;

        li {
            div {
                border-bottom: 1px solid #E5E5E5;
                padding-top: 12px;
                padding-bottom: 12px;
                margin-left: 15px;
                display: flex;
                align-items: center;

                .right-icon {
                    position: absolute;
                    right: 24px;

                }
            }
        }
    }

    .button-wrapper {
        width: 100%;
        padding: 44px;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            border: none;
            border-radius: 4px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #767676;
            color: #ffffff;
            font-size: 17px;
            width: 98px;

        }
    }
</style>