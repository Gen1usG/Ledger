<template>
    <div class="tags">
        <ul>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
        <button>新增标签</button>
    </div>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import Vue from 'vue';

    @Component
    export default class Tags extends Vue {
        name: "Tags" | undefined;

    }
</script>

<style scoped lang="scss">
    .tags {
        ul {
            display: flex;

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