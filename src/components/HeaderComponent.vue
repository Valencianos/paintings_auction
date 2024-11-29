<script>
import SearchBlock from "@/components/UI/SearchBlock.vue";
import NavBlock from "@/components/UI/NavBlock.vue";

export default {
  name: "HeaderComponent",
  components: {
    NavBlock,
    SearchBlock,
  },
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <NavBlock />
        <SearchBlock />
      </div>
    </div>
    <div class="line"></div>
  </header>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_vars.scss" as *;
.header {
  height: 96px;
  &-wrapper {
    padding-top: 38px;
    padding-bottom: 38px;
    display: flex;
    justify-content: space-between;
    padding-left: 96px;
  }
}
.line {
  height: 1px;
  background: $colorBorderInactive;
}
</style>
