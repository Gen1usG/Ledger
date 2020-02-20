<template>
    <div class="tags">
        <ul>
            <li v-for="(tag) in tagList" :key="tag" @click="toggle(tag)"
                :class="{selected:selectedList.indexOf(tag)>=0}">{{tag}}
            </li>
        </ul>
        <button @click="createTag">新增标签</button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Watch} from "vue-property-decorator";
    import Vue from 'vue';

    @Component
    export default class Tags extends Vue {
        selectedList: string[] = [];
        @Prop() tagList: string[] | undefined;

        toggle(el: string) {
            const index = this.selectedList.indexOf(el);
            if (index >= 0) {
                this.selectedList.splice(index, 1);
            } else {
                this.selectedList.push(el);
            }

        }

        createTag() {
            const newTag = window.prompt('请输入标签名');
            if (newTag) {
                if (this.tagList!.indexOf(newTag as string) >= 0) {
                    alert('该标签已存在');
                } else if (newTag!.length <= 0) {
                    return;
                } else {
                    this.$emit('update:tagList', [...this.tagList!, newTag]);
                }
            }
        }

        @Watch('selectedList')
        onSelectedListChange(value:string[]){
            this.$emit('update:value', value);
        }

    }
</script>

<style scoped lang="scss">
    .tags {
        ul {
            max-height: 100px;
            display: flex;
            flex-wrap: wrap;
            padding-right: 8px;
            overflow: auto;

            li {
                $h: 24px;
                background-color: #D9D9D9;
                height: $h;
                line-height: $h;
                padding: 0 16px;
                border-radius: $h/2;
                margin-left: 16px;
                margin-top: 8px;
                color: #484848;

                &.selected {
                    background-color: darken(#D9D9D9, 50%);
                    color: #fff;
                }
            }
        }

        button {
            color: #999999;
            border: none;
            background-color: transparent;
            border-bottom: 1px solid #666;
            margin: 8px 16px;
            padding: 3px;
        }
    }
</style>