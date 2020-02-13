<template>
    <div class="wrapper">
        <div class="main" :class="classPrefix && `${classPrefix}-content`">
            <slot></slot>
        </div>
        <Nav class="nav"></Nav>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        props: ['classPrefix']
    }
</script>

<style scoped lang="scss">
    .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;

        .main {
            flex-grow: 1;
        }
    }
</style>