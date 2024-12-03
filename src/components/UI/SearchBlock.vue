<script>
import ButtonUI from "@/components/UI/ButtonUI.vue";

export default {
  name: "SearchBlock",
  components: { ButtonUI },
  computed: {
    filteredPaintings() {
      return this.$store.state.paintings.filter((pic) => {
        return (
          pic.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        );
      });
    },
  },
};
</script>

<template>
  <form>
    <div class="form-wrapper">
      <input
        type="text"
        name="search"
        id="search-input"
        placeholder="Поиск по названию картины"
      />
      <label for="search-input"></label>
      <ButtonUI btnTitle="Найти" @click="filteredPaintings" />
    </div>
  </form>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_vars.scss" as *;
.form-wrapper {
  display: flex;
  border: 1px solid $colorBorderInactive;
  align-items: center;
}

#search-input {
  width: 416px;
}
</style>
