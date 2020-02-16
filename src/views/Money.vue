<template>
    <div>
        <Layout class-prefix="layout">
            <Numpad/>
            <Types/>
            <Notes/>
            <Tags :tagList.sync="tagList" />
        </Layout>
    </div>
</template>

<script>
    import Tags from "@/components/Money/Tags"
    import Types from '@/components/Money/Types'
    import Notes from '@/components/Money/Notes'
    import Numpad from "@/components/Money/Numpad"

    export default {
        name: "Money",
        components: {Numpad, Tags, Types, Notes},
        data(){
            return{
                tagList:['衣', '食', '住', '行','彩票'],
            }
        }
    }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
