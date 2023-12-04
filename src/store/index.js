import { createStore } from "vuex";
export default createStore({
  state: {
    women: [
      {
        title: "Qoftan",
        src: require("@/assets/img/women/1.jpeg"),
        price: 1849.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "red & white",
        brand: "traditional",
        gender: "women",
        id: 1,
      },

      {
        title: "Qoftan",
        src: require("@/assets/img/women/2.jpeg"),
        price: 1379.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red & Gold",
        brand: "traditional",
        gender: "women",
        id: 2,
      },
      {
        title: "Malya",
        src: require("@/assets/img/women/3.jpeg"),
        price: 859.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "Jerbaa",
        gender: "women",
        id: 3,
      },
      {
        title: "Jebba",
        src: require("@/assets/img/women/4.jpeg"),
        price: 1319.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "traditional",
        gender: "women",
        id: 4,
      },
      {
        title: "Jebba",
        src: require("@/assets/img/women/5.jpeg"),
        price: 2899.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Green",
        brand: "traditional",
        gender: "women",
        id: 5,
      },
      {
        title: "Malia",
        src: require("@/assets/img/women/6.jpeg"),
        price: 659.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "Sejnane",
        gender: "women",
        id: 6,
      },
      
    ],
    men: [
      {
        title: "Jebba",
        src: require("@/assets/img/men/1.jpeg"),
        price: 979.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "jerbi",
        gender: "men",
        id: 7,
      },
      {
        title: "Dengri",
        src: require("@/assets/img/men/2.jpeg"),
        price: 779.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "top",
        color: "white",
        brand: "Sfaxi",
        gender: "men",
        id: 8,
      },
      {
        title: "Traditional",
        src: require("@/assets/img/men/3.jpeg"),
        price: 779.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "white",
        brand: "traditional",
        gender: "men",
        id: 9,
      },
      {
        title: "Jebba",
        src: require("@/assets/img/men/4.jpeg"),
        price: 3779.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "Red",
        brand: "traditional",
        gender: "men",
        id: 10,
      },
      {
        title: "Barnous",
        src: require("@/assets/img/men/5.jpeg"),
        price: 3779.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "Top",
        color: "white",
        brand: "Douz",
        gender: "men",
        id: 11,
      },
      {
        title: "Qachabia",
        src: require("@/assets/img/men/6.jpeg"),
        price: 279.99,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic impedit eveniet alias sint nam cum ad animi eius praesentium ea, nemo ab nihil assumenda maxime rem aliquam facere vitae quos.",
        type: "top",
        color: "Gold",
        brand: "traditional",
        gender: "men",
        id: 12,
      },
    ],
    cart: [],
    product: {},
    searchWord: null,
    filteredProducts: null,
    tax: 5,
    shipping: 15,
  },
  getters: {
    allProducts: (state) => state.women.concat(state.men),
    getWomen: (state) => state.women,
    getMen: (state) => state.men,

    getCart: (state) => state.cart,
    cartItemCount: (state) => state.cart.length,

    getSearchWord: (state) => state.searchWord,

    getFilteredProduct: (state) => state.filteredProducts,

    getProductByIdWomen: (state) => (id) =>
      state.women.find((women) => women.id === parseInt(id)),

    getProductByIdMen: (state) => (id) =>
      state.men.find((men) => men.id === parseInt(id)),

    cartTotalPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total += item.quantityPrice;
      });
      return total.toFixed(2);
    },

    getTax: (state) => state.tax,
    getShipping: (state) => state.shipping,
    cartCheckoutPrice: (state) => {
      let total = 0;
      state.cart.forEach((item) => {
        total = item.quantityPrice + state.shipping;
        total = total + (total * state.tax) / 100;
      });
      return total.toFixed(2);
    },
  },
  mutations: {
    ADD_TO_CART: (state, { product, quantity, size, quantityPrice }) => {
      let productInCart = state.cart.find((item) => {
        return item.product.id === product.id;
      });
      if (productInCart) {
        productInCart.quantity += quantity;
        productInCart.quantityPrice += productInCart.product.price;
        productInCart.quantityPrice =
          Math.round(productInCart.quantityPrice * 100) / 100;
        return;
      }
      state.cart.push({ product, quantity, size, quantityPrice });
    },

    REMOVE_FROM_CART: (state, product) => {
      state.cart = state.cart.filter((item) => {
        return item.product.id !== product.id;
      });
    },

    GET_PRODUCT_DETAILS: (state, product) => {
      state.productDetails.push(product);
    },

    FILTERED_PRODUCTS(state, word) {
      if (!word || word === "{}") {
        state.searchWord = null;
        state.filteredProducts = null;
      } else {
        state.searchWord = word;
        word = removerAcentos(word.trim().toLowerCase());
        state.filteredProducts = state.women
          .concat(state.men)
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(word) ||
              product.brand.toLowerCase().includes(word) ||
              product.color.toLowerCase().includes(word) ||
              product.type.toLowerCase().includes(word)
            );
          });
      }
    },

    ORDER_SUCCESSFUL(state) {
      state.cart = [];
    },
  },
  actions: {
    addProductToCart: (
      { commit },
      { product, quantity, size, quantityPrice }
    ) => {
      commit("ADD_TO_CART", { product, quantity, size, quantityPrice });
    },
    removeProductFromCart: ({ commit }, product) => {
      commit("REMOVE_FROM_CART", product);
    },
    filterProducts({ commit }, word) {
      commit("FILTERED_PRODUCTS", word);
    },
    orderSuccess({ commit }) {
      commit("ORDER_SUCCESSFUL");
    },
  },
  modules: {},
});
