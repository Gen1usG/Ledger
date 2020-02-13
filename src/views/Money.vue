<template>
    <div>
        <Layout>
            <div class="tags">
                <ul>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <button>新增标签</button>
            </div>
            <div class="notes">
                <label>
                    备注
                    <input type="text">
                </label>

            </div>
            <ul class="types">
                <li>支出</li>
                <li>收入</li>
            </ul>
            <div class="numpad">
                <div class="output"></div>
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
        </Layout>
    </div>
</template>

<script>
    export default {
        name: "Money"
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
                margin-top:8px;
                color: #484848;
            }
        }

        button {
            color:#999999;
            border: none;
            background-color: transparent;
            border-bottom: 1px solid #666;
            margin:16px;
            padding:3px;
        }
    }
    .notes{

    }
</style>