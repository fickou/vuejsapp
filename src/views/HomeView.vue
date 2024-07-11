<template>
    <div id="app" class="app">
      <h1>{{ restaurantName }}</h1>
      <p class="description">
        Bienvenue dans notre café <strong>{{ restaurantName }}!</strong> Réputé pour nos pains et 
        pâtisseries exquises, notre établissement vous offre un moment de plaisir 
        dès le matin ou lors d'un goûter réconfortant. Une fois que vous goûtez à 
        nos délices, il est difficile de s'arrêter. Laissez-vous tenter par notre 
        ambiance chaleureuse et nos créations gourmandes.
      </p>
  
      <section class="menu">
        <h2>Menu</h2>
        <MenuItem
          v-for="item in simpleMenu"
          :key="item.name"
          :name="item.name"
          :image="item.image"
          :price="item.price"
          :inStock="item.inStock"
          :quantity="item.quantity"
          @add-items-to-cart="addToShoppingCart"
        />
      </section>
  
      <aside class="shopping-cart">
        <h2>Panier d'achat : {{ shoppingCart }} articles</h2>
      </aside>
  
      <footer class="footer">
        <p>{{ copyright }}</p>
      </footer>
    </div>
  </template>
  
  <script>
  import MenuItem from "../components/MenuItem.vue";
  import { mapGetters, mapState, mapActions } from "vuex";
  
  export default {
    name: "HomeVieuw",
    components: {
      MenuItem
    },
    computed: {
      ...mapGetters({
        copyright: 'copyright',
      }),
      ...mapState({
        restaurantName: "restaurantName",
        shoppingCart: "shoppingCart",
        simpleMenu: "simpleMenu"
      })
    },
    methods: {
      ...mapActions({
        addToShoppingCart: 'addToShoppingCart',
      }),
    }
  };
  </script>
  
  <style lang="scss">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 100px;
  }
  
  .menu {
    margin: 20px 0;
  }
  
  .shopping-cart {
    margin: 20px 0;
  }
  
  .contact {
    margin: 20px 0;
  }
  
  .footer {
    margin-top: 40px;
    font-size: 0.8em;
    color: #aaa;
  }
  </style>
  