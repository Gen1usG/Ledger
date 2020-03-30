<template>
    <label class="notes">
        <span>{{name}}</span>
        <input type="text" :placeholder="placeholder" :value="value" @input="onValueChanged($event)">
    </label>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class FormItem extends Vue {
        @Prop({required: true}) name!: string;
        @Prop(String) placeholder?: string;
        @Prop({default: ''}) value!: string;

        onValueChanged(value: object) {
            this.$emit('update:value', value);
        }
    }
</script>

<style scoped lang="scss">
    .notes {
        background-color: #E5E5E5;
        line-height: 22px;
        padding-left: 16px;
        color: #333;

        > input {
            height: 40px;
            background-color: inherit;
            box-shadow: none;
            border: none;
            width: 80%;
            margin-left: 16px;
        }
    }
</style>