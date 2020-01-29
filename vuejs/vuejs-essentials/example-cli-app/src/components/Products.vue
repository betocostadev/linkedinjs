<template>
  <div>
    <h1>Shopping</h1>
    <navbar :cart="cart" :cartQty="cartQty" :cartTotal="cartTotal"> </navbar>
    <p class="animated fadeInRight">Take a Look at our offerings</p>
    <price-slider
      :sliderStatus="sliderStatus"
      :maximum.sync="maximum"
    ></price-slider>
    <product-list :maximum="maximum" :products="products"></product-list>
  </div>
</template>
<script>
import Navbar from "./Navbar";
import PriceSlider from "./PriceSlider";
import ProductList from "./ProductList";
export default {
  name: "products",
  props: [
    "products",
    "maximum",
    "cart",
    "cartQty",
    "cartTotal",
    "sliderStatus",
    "sliderState"
  ],
  components: {
    Navbar,
    PriceSlider,
    ProductList
  }
};
</script>
