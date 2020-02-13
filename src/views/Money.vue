<template>
    <div>
        <Layout class-prefix="layout">
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
            <ul class="types">
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
            <div class="notes">
                <label>
                    备注
                    <input type="text" placeholder="在这里添加备注">
                </label>

            </div>
            <div class="tags">
                <ul>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <button>新增标签</button>
            </div>
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "Money"
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>

<style scoped lang="scss">
    @import '~@/assets/style/helper.scss';

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