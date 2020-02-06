<template>
    <div>
        <nav class="nav">
            <router-link to="/label">标签</router-link>
            <router-link to="/money">记一笔</router-link>
            <router-link to="/statistics">统计</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Nav",
    }
</script>

<style scoped>
    .nav{
        display: flex;
    }
</style>