<template>
  <div id="app" class="container mt-5">
    <h1>My Shop</h1>
    <navbar
      :cart="cart"
      :cartQty="cartQty"
      :cartTotal="cartTotal"
      @toggle="toggleSliderStatus"
      @delete="deleteItem"
    >
    </navbar>
    <p class="animated fadeInRight">Take a Look at our offerings</p>
    <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
    <price-slider
      :sliderStatus="sliderStatus"
      :maximum.sync="maximum"
    ></price-slider>
    <product-list
      :maximum="maximum"
      :products="products"
      @add="addItem"
    ></product-list>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ProductList from "./components/ProductList";
import PriceSlider from "./components/PriceSlider";
import Navbar from "./components/Navbar";
export default {
  name: "app",
  data() {
    return {
      maximum: 99,
      cart: [],
      products: null,
      sliderStatus: true
    };
  },
  components: {
    FontAwesomeIcon,
    ProductList,
    PriceSlider,
    Navbar
  },
  computed: {
    cartTotal() {
      let sum = 0;
      for (let key in this.cart) {
        sum = sum + this.cart[key].product.price * this.cart[key].qty;
      }
      return sum;
    },
    cartQty() {
      let qty = 0;
      for (let key in this.cart) {
        qty = qty + this.cart[key].qty;
      }
      return qty;
    }
  },
  methods: {
    toggleSliderStatus() {
      this.sliderStatus = !this.sliderStatus;
    },

    addItem(product) {
      let whichProduct;
      let existing = this.cart.filter(function(item, index) {
        if (item.product.id == Number(product.id)) {
          whichProduct = index;
          return true;
        } else {
          return false;
        }
      });

      if (existing.length) {
        this.cart[whichProduct].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
    deleteItem(id) {
      if (this.cart[id].qty > 1) {
        this.cart[id].qty--;
      } else {
        this.cart.splice(id, 1);
      }
    }
  },
  mounted() {
    fetch("https://hplussport.com/api/products/order/price")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
