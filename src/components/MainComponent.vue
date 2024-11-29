<script>
import CardBlock from "@/components/UI/CardBlock.vue";

export default {
  name: "MainComponent",
  components: { CardBlock },
};
</script>

<template>
  <main class="main">
    <div class="container">
      <h1 class="main-title">Картины эпохи Возрождения</h1>
      <div class="main-cards">
        <CardBlock
          v-for="card in $store.state.paintings"
          :key="card.id"
          :title="card.title"
          :imgUrl="card.imgUrl"
          :oldPrice="card.oldPrice"
          :price="card.price"
          :isSold="card.isSold"
        ></CardBlock>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  &-title {
    font-size: 24px;
    font-weight: 700;
    line-height: 150%; /* 36px */
    margin-top: 45px;
    margin-bottom: 39px;
  }
  &-cards {
    margin-bottom: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 32px;
  }
}
</style>
