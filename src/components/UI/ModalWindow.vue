<script>
export default {
  name: "ModalWindow",
  computed: {
    paintings() {
      return this.$store.getters.cartPaintings;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>

<template>
  <div>
    <h2>Корзина</h2>
    <ul>
      <li v-for="(item, index) in paintings" :key="index">
        {{ item.title }} |
        {{ item.price }}
      </li>
    </ul>
    <p>Total: {{ total }}</p>
  </div>
</template>

<style scoped lang="scss"></style>
