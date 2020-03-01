<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {

    }
</script>

<style scoped lang="scss">
    .button {
        border: none;
        border-radius: 4px;
        height: 40px;
        line-height: 40px;
        text-align: center;

        color: #ffffff;
        font-size: 17px;
        width: 98px;
    }
</style>