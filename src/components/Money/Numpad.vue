<template>
    <div class="numpad">
        <label>
            <input class="input" :value="value"/>
        </label>
        <div class="buttons">
            <button @click="inputNum">1</button>
            <button @click="inputNum">2</button>
            <button @click="inputNum">3</button>
            <button @click="deleteNum">删除</button>
            <button @click="inputNum">4</button>
            <button @click="inputNum">5</button>
            <button @click="inputNum">6</button>
            <button @click="clear">清空</button>
            <button @click="inputNum">7</button>
            <button @click="inputNum">8</button>
            <button @click="inputNum">9</button>
            <button @click="ok">OK</button>
            <button @click="inputNum">0</button>
            <button @click="inputNum">.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Numpad extends Vue {
        name: "Numpad" | undefined;
        value: String = '0';

        inputNum(el: any) {
            const button = el.target;
            const num = button.textContent;
            if (this.value === '0') {
                if ('1234567890'.indexOf(num) >= 0) {
                    this.value = num;
                } else if (num === '.') {
                    this.value += num;
                }
            } else {
                if (num === '.' && this.value.indexOf('.') >= 0) {
                    return;
                } else if (this.value.length <= 16) {
                    this.value += num;
                } else {
                    return;
                }
            }
        }
        clear(){
            this.value = '0'
        }
        deleteNum(){
            if(this.value.length>1){
                this.value = this.value.substring(0,this.value.length-1)
            }else{
                this.value = '0'
            }
        }
        ok(){
            console.log('ok');
        }
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