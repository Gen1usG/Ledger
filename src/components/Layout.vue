<template>
    <div class="wrapper">
        <div class="main">
            <slot></slot>
        </div>
        <Nav class="nav"></Nav>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped lang="scss">
    .wrapper{
        height:100vh;
        display: flex;
        flex-direction: column;
        .main{
            flex-grow:1;
        }
    }
</style>