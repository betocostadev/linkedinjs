<template>
  <transition-group
    name="fade"
    tag="div"
    @beforeEnter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <div
      class="row d-flex mb-3 align-items-center"
      v-for="(item, index) in products"
      :key="item.id"
      :data-index="index"
    >
      <!-- v-if="item.price <= Number(maximum)" -->
      <div class="col-1 m-auto">
        <button class="btn btn-info" @click="$parent.$emit('add', item)">
          +
        </button>
      </div>
      <div class="col-4">
        <img class="img-fluid d-block" :src="item.image" :alt="item.name" />
      </div>
      <div class="col">
        <h3 class="text-info">{{ item.name }}</h3>
        <p class="mb-0">{{ item.description }}</p>
        <div class="h5 float-right">
          <price :value="Number(item.price)"></price>
        </div>
      </div>
    </div>
  </transition-group>
</template>

<script>
import Price from "./Price";
export default {
  name: "product-list",
  components: { Price },
  props: ["products", "maximum"],
  methods: {
    beforeEnter: function(el) {
      el.className = "d-none";
    },
    enter: function(el) {
      let delay = el.dataset.index * 100;
      setTimeout(function() {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave: function(el) {
      let delay = el.dataset.index * 100;
      setTimeout(function() {
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    }
  }
  // computed: {
  //   productsToShow() {
  //     return this.products.filter(item => {
  //       return item.price <= this.maximum;
  //     });
  //   }
  // }
};
</script>
