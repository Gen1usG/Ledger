<template>
    <div>
        该页面不存在，请检查地址
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NotFound extends Vue {
        name: "NotFound" | undefined;
    }
</script>

<style scoped lang="scss">

</style>