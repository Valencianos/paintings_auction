import Vue from "vue";
import Vuex from "vuex";
import paintings from "@/api/paintings";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    links: ["Каталог", "Доставка", "Оплата", "Контакты", "О компании"],
    paintings: [],
    cart: [],
  },
  getters: {
    isSold(state) {
      return state.paintings.qty === 0;
    },
    cartPaintings(state) {
      return state.cart.map((cartItem) => {
        const pic = state.paintings.find((p) => p.id === cartItem.id);
        return {
          title: pic.title,
          price: pic.price,
        };
      });
    },
    cartTotal(state, getters) {
      return getters.cartPaintings.reduce(
        (total, painting) => total + painting.price * painting.qty,
        0
      );
    },
  },
  mutations: {
    setPaintings(state, paintings) {
      state.paintings = paintings;
    },
    pushPaintingToCart(state, paintingId) {
      state.cart.push({
        id: paintingId,
        quantity: 1,
      });
    },
    incrementItemQty(state, cartItem) {
      cartItem.quantity++;
    },
    decrementItemQty(state, painting) {
      painting.qty--;
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
        const cartItem = context.state.cart.find(
          (item) => item.id === painting.id
        );
        if (!cartItem) {
          context.commit("pushPaintingToCart", painting.id);
        } else {
          context.commit("incrementItemQty", cartItem);
        }
        context.commit("decrementItemQty", painting);
      }
    },
  },
  modules: {},
});
