<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class App extends Vue {

    }
</script>

<style lang="scss">
    @import "~@/assets/style/reset.scss";

</style>


