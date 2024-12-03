<script>
import ButtonUI from "@/components/UI/ButtonUI.vue";

export default {
  name: "SearchBlock",
  components: { ButtonUI },
  data() {
    return {
      searchQuery: "",
    };
  },
  // computed: {
  //   searchedProducts() {
  //     return paintings.value.filter((painting) => {
  //       return (
  //         painting.title
  //           .toLowerCase()
  //           .indexOf(searchQuery.value.toLowerCase()) !== -1
  //       );
  //     });
  //   },
  // },
};
</script>

<template>
  <div class="form-wrapper">
    <input
      type="text"
      class="search"
      placeholder="Поиск по названию картины"
      v-model="searchQuery"
    />
    <ButtonUI btnTitle="Найти" />
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_vars.scss" as *;
.form-wrapper {
  display: flex;
  border: 1px solid $colorBorderInactive;
  align-items: center;
}
.search {
  font-family: $font-family;
  display: block;
  width: 294px;
  color: $searchText;
  font-size: 14px;
  line-height: 150%; /* 21px */
  border: none;
  font-weight: 400;
  padding: 10px 16px;
  background-color: transparent;
}
</style>
