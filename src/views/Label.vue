<template>
    <Layout>
        <div>
            <div class="tags-wrapper">
                <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/label/edit/${tag.id}`">
                    <div>
                        <span>{{tag.name}}</span>
                        <Icon name="right" class="right-icon"/>
                    </div>
                </router-link>
            </div>

            <div class="button-wrapper">
                <Button class="button" @click.native="createTag">新建标签</Button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import Icon from '@/components/Icon.vue';
    import Button from '@/components/Button.vue';
    import createTag from '@/mixins/createTag';


    @Component({
        components: {Button, Icon}
    })
    export default class Label extends createTag {
        get tags(){
            return this.$store.state.tags
        }

        created(){
            this.$store.commit('getTags')
        }

    }
</script>

<style scoped lang="scss">
    .tags-wrapper {
        background-color: #fff;
        position: relative;
        font-size: 16px;

        .tag {

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

        .button {
            background-color: #767676;
        }
    }
</style>