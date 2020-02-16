<template>
    <div class="notes">
        <label>
            备注
            <input type="text" placeholder="在这里添加备注">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator';
    @Component

    export default class Notes extends Vue{
        name: "Notes" | undefined
    }
</script>

<style scoped lang="scss">
    .notes {
        background-color: #E5E5E5;
        line-height: 22px;
        padding-left: 16px;

        > label {
            color: #333;

            > input {
                height: 72px;
                background-color: inherit;
                box-shadow: none;
                border: none;
                width: 80%;
                margin-left: 16px;
            }
        }
    }
</style>