import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: ["Каталог", "Доставка", "Оплата", "Контакты", "О компании"],
    paintings: [
      {
        id: 1,
        title: "«Рождение Венеры» Сандро Боттичелли",
        imgUrl: "boticcelli.png",
        oldPrice: 2000000,
        price: 1000000,
        isSold: false,
      },
      {
        id: 2,
        title: "«Тайная вечеря»  Леонардо да Винчи",
        imgUrl: "leonardo.png",
        oldPrice: 0,
        price: 3000000,
        isSold: false,
      },
      {
        id: 3,
        title: "«Сотворение Адама» Микеланджело",
        imgUrl: "mickelangelo.png",
        oldPrice: 6000000,
        price: 5000000,
        isSold: false,
      },
      {
        id: 4,
        title: "«Урок анатомии»  Рембрандт",
        imgUrl: "rembrandt.png",
        oldPrice: 4000000,
        price: 3000000,
        isSold: true,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
