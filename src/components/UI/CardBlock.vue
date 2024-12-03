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
    // isSold: Boolean,
    qty: Number,
  },
  methods: {
    hasDiscount() {
      return this.$store.state.paintings.oldPrice;
    },
    formatPrice(price) {
      const temp = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return temp + " $";
    },
  },
  computed: {
    isSold() {
      return this.$store.getters.isSold;
    },
  },
};
</script>

<template>
  <div class="card" v-if="!isSold">
    <a href="#" class="card-link">
      <img
        :src="require(`@/assets/img/${imgUrl}`)"
        :alt="title"
        class="card-img"
      />
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <div class="card-action">
          <div class="price-wrapper" v-if="hasDiscount">
            <p class="card-oldPrice">
              {{ formatPrice(oldPrice) }}
            </p>
            <p class="card-price">{{ formatPrice(price) }}</p>
          </div>
          <div class="price-wrapper" v-else>
            <p class="card-price">{{ formatPrice(price) }}</p>
          </div>
          <ButtonUI btnTitle="Купить" />
        </div>
      </div>
    </a>
  </div>

  <div class="card card-inactive" v-else>
    <a href="#" class="card-link">
      <img
        :src="require(`@/assets/img/${imgUrl}`)"
        :alt="title"
        class="card-img"
      />
      <div class="card-content">
        <h3 class="card-title">{{ title }}</h3>
        <p class="sold-text">Продана на аукционе</p>
      </div>
    </a>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_vars.scss" as *;
.card {
  border: 1px solid $colorBorderInactive;
  &:hover {
    box-shadow: 0 4px 8px 0 $colorBorderInactive;
  }
  &-inactive {
    opacity: 0.5;
  }
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

.sold-text {
  margin-top: 34px;
}
</style>
