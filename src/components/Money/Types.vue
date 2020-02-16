<template>
    <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {
        name: "Types" | undefined;

    }
</script>

<style scoped lang="scss">
    .types {
        display: flex;

        > li {
            width: 50vw;
            background-color: #C4C4C4;
            text-align: center;
            font-size: 24px;
            padding: 17px 0;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                border: 2px solid #333;
            }
        }
    }
</style>