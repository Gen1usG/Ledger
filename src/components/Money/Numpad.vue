<template>
    <div class="numpad">
        <label>
            <input class="input"/>
        </label>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>OK</button>
            <button>0</button>
            <button>.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Numpad extends Vue {
        name: "Numpads" | undefined;
    }
</script>

<style scoped lang="scss">
    @import '~@/assets/style/helper.scss';

    .numpad {
        .input {
            font-family: Consolas monospace;
            padding: 12px 5px;
            border: none;
            width: 100%;
            font-size: 36px;
            text-align: right;

        }

        .buttons {
            @extend %clearFix;
            $bg-color: #F2F2F2;

            button {
                float: left;
                $h: 64px;
                width: 25%;
                line-height: $h;
                border: none;
                height: $h;

                &:nth-child(1) {
                    background-color: $bg-color;
                }

                &:nth-child(2), &:nth-child(5) {
                    background-color: darken($bg-color, 6%);
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background-color: darken($bg-color, 18%);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background-color: darken($bg-color, 24%);
                }

                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background-color: darken($bg-color, 30%);
                }

                &:nth-child(14) {
                    background-color: darken($bg-color, 36%);
                }

                &:nth-child(12) {
                    background-color: darken($bg-color, 42%);
                    height: $h*2;
                    float: right;
                }

                &:nth-child(13) {
                    width: 50%;
                }
            }

        }

    }
</style>