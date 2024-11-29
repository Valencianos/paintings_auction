<script>
export default {
  name: "NavBlock",
};
</script>

<template>
  <nav class="nav">
    <a
      v-for="(link, index) in $store.state.links"
      :key="index"
      class="nav-link"
    >
      {{ link }}
    </a>
  </nav>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_vars.scss" as *;
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  &-link {
    color: $primaryText;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
  }
}
</style>
