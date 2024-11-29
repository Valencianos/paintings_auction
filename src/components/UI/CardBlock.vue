<script>
import ButtonUI from "@/components/UI/ButtonUI.vue";

export default {
  name: "CardBlock",
  components: { ButtonUI },
  props: {
    title: String,
    imgUrl: String,
    oldPrice: Number,
    price: Number,
    isSold: Boolean,
  },
  methods: {
    hasDiscount() {
      return this.$store.state.paintings.oldPrice !== 0;
    },
    formatPrice(price) {
      const temp = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return temp + " $";
    },
  },
};
</script>

<template>
  <div class="card">
    <a href="" class="card-link">
      <img
        :src="require(`@/assets/img/${imgUrl}`)"
        :alt="title"
        class="card-img"
      />
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <div class="card-action" v-if="!isSold">
          <div class="price-wrapper">
            <p v-if="hasDiscount" class="card-oldPrice">
              {{ formatPrice(oldPrice) }}
            </p>
            <p class="card-price">{{ formatPrice(price) }}</p>
          </div>
          <ButtonUI btnTitle="Купить" />
        </div>
        <div v-else class="sold">
          <p class="sold-text">Продана на аукционе</p>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_vars.scss" as *;
.card {
  border: 1px solid $colorBorderInactive;
  &-link {
    display: flex;
    flex-direction: column;
  }
  &-img {
    display: block;
    width: 280px;
    height: 160px;
  }
  &-content {
    padding: 20px 24px 24px 24px;
  }
  &-title {
    font-size: 18px;
    line-height: 150%; /* 27px */
    text-align: left;
    margin-bottom: 22px;
    max-width: 220px;
  }
  &-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-wrapper {
    display: flex;
    flex-direction: column;
  }
  &-price {
    font-size: 16px;
    font-weight: 700;
    line-height: 150%; /* 24px */
  }
  &-oldPrice {
    color: $strikethroughText;
    font-size: 14px;
    font-weight: 300;
    line-height: 150%; /* 21px */
    text-decoration-line: line-through;
  }
}
</style>
