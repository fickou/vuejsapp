import { createStore } from 'vuex'

export default createStore({
  state: {
    restaurantName: "La belle vue",
        shoppingCart: 0,
        simpleMenu: [
          {
            name: "Croissant",
            image: {
              source: "/images/crossiant.png",
              alt: "Un croissant"
            },
            inStock: true,
            quantity: 1
          },
          {
            name: "Baguette de pain",
            image: {
              source: "/images/french-baguette.png",
              alt: "Quatre baguettes de pain"
            },
            inStock: true,
            quantity: 1
          },
          {
            name: "Éclair",
            image: {
              source: "/images/eclair.png",
              alt: "Éclair au chocolat"
            },
            inStock: false,
            quantity: 1
          }
        ]
  },
  getters: {
    copyright(state) {
      const currentYear = new Date().getFullYear();
      return `Copyright ${state.restaurantName} ${currentYear}`;
    }
  },
  mutations: {
    ADD_SHOPPING(state, amount){
      state.shoppingCart += amount;
    }
  },
  actions: {
    addToShoppingCart(context,amount) {
      context.commit('ADD_SHOPPING',amount)
    },
  },
  modules: {
  }
})
