<template>
  <nav>

    <router-link to="/money" class="item"  active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>

    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>

    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">


export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>

@import "~@/assets/style/helper.scss";

nav {
  display: flex;
  @extend %outerShadow;
  font-size: 12px;

  > .item {
    width: 33.333%;
    padding: 2px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .icon{
    width: 30px;
    height: 30px;
  }
  > .item.selected {
    color: $color-hightlight;
  }
}

</style>