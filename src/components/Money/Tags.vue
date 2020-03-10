<template>
    <div class="tags">
        <ul>
            <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag)"
                :class="{selected:selectedList.indexOf(tag)>=0}">{{tag.name}}
            </li>
        </ul>
        <button @click="createTag">新增标签</button>
    </div>
</template>

<script lang="ts">
    import {Component, Watch} from "vue-property-decorator";
    import createTag from '@/mixins/createTag';


    @Component
    export default class Tags extends createTag {
        get tagList(){
            return this.$store.state.tags;
        }
        selectedList: Tag[] = [];

        created() {
            this.$store.commit('getTags');
        }

        toggle(el: Tag) {
            const index = this.selectedList.indexOf(el);
            if (index >= 0) {
                this.selectedList.splice(index, 1);
            } else {
                this.selectedList.push(el);
            }
        }



        @Watch('selectedList')
        onSelectedListChange(value: string[]) {
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