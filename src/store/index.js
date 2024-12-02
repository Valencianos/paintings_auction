import Vue from "vue";
import Vuex from "vuex";
import paintings from "@/api/paintings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: ["Каталог", "Доставка", "Оплата", "Контакты", "О компании"],
    paintings: [],
  },
  getters: {
    availablePaintings(state) {
      return state.paintings.filter((painting) => painting.qty > 0);
    },
  },
  mutations: {
    setPaintings(state, paintings) {
      state.paintings = paintings;
    },
  },
  actions: {
    fetchPaintings({ commit }) {
      return new Promise((resolve) => {
        paintings.getPaintings((paintings) => {
          commit("setPaintings", paintings);
          resolve();
        });
      });
    },
    addToCart(context, painting) {
      if (painting.qty > 0) {
        context.commit("pushProductToCart", painting);
      } else {
        // something happening
      }
    },
  },
  modules: {},
});
