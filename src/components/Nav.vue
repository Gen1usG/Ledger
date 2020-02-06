<template>
  <nav class="nav">
    <router-link to="/label" class="item" active-class="selected">
      <Icon name="label"></Icon>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"></Icon>
      记一笔
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"></Icon>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
    import Icon from '@/components/Icon.vue'

    export default {
        name: "Nav",
        components: {Icon}
    }
</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    font-size: 12px;
    width: 100%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

    .item {
      color: inherit;
      width: 33.33333333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 2px 0;
    }

    .icon {
      width: 32px;
      height: 32px;
    }
    .selected{
      color:red;
    }
  }
</style>