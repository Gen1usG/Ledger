<template>
    <Layout>
        <div class="label-wrapper">
            <ul class='tags-wrapper'>
                <li>
                    <div>
                        <span>衣</span>
                        <Icon name="right" class="right-icon"/>
                    </div>
                </li>
                <li>
                    <div>
                        <span>食</span>
                        <Icon name="right" class="right-icon"/>
                    </div>
                </li>
                <li>
                    <div>
                        <span>住</span>
                        <Icon name="right" class="right-icon"/>
                    </div>
                </li>
                <li>
                    <div>
                        <span>行</span>
                        <Icon name="right" class="right-icon"/>
                    </div>
                </li>
            </ul>
            <div class="button-wrapper">
                <button>新建标签</button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Icon from '@/components/Icon.vue';

    @Component({
        components: {Icon}
    })
    export default class Label extends Vue {

    }
</script>

<style scoped lang="scss">
    .tags-wrapper {
        position: relative;
        background-color: #fff;
        font-size: 16px;

        li {
            div {
                border-bottom: 1px solid #E5E5E5;
                padding-top: 12px;
                padding-bottom: 12px;
                margin-left: 15px;
                display: flex;
                align-items: center;

                .right-icon {
                    position: absolute;
                    right: 24px;

                }
            }
        }
    }

    .button-wrapper {
        width: 100%;
        padding: 44px;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
            border:none;
            border-radius: 4px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background-color: #767676;
            color:#ffffff;
            font-size: 17px;
            width: 98px;

        }
    }
</style>