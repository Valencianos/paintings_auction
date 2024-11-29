<script>
export default {
  name: "ButtonUI",
  props: ["btnTitle"],
};
</script>

<template>
  <button class="btn">
    {{ btnTitle }}
  </button>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_vars.scss" as *;
.btn {
  padding: 14px 36px;
  color: $buttonTextColor;
  background-color: $buttonNormal;
  &:hover {
    background-color: $buttonHover;
  }
  &.disabled {
    background-color: $buttonDisabled;
  }
}
</style>
