<script>
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import MainComponent from "../components/MainComponent";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    FooterComponent,
    MainComponent,
  },
};
</script>

<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<style scoped lang="scss"></style>
