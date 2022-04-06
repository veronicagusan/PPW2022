<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  components: {
    ProductItem
  },
  data: () => {
    return {
      products: []
    };
  },
  mounted() {
    this.products = JSON.parse(localStorage.getItem("shopping_cart"));
  },
  methods: {
    productRemoved(){
      this.products = JSON.parse(localStorage.getItem("shopping_cart"));
    }
  }
};
</script>

<template>
  <div>
    <h1>My shopping cart</h1>
    
    <table border="1" width="100%">
      <thead>
        <tr>
          <th width="100">Photo</th>
          <th>Name</th>
          <td width="100">Price</td>
        </tr>
      </thead>
      <tbody>
        <product-item 
          v-for="(product, productIndex) in products" 
          :key="productIndex"
          :product="product"
          mode="cart"
          @onRemoveProduct="productRemoved()"
        />
      </tbody>
    </table>
  </div>
</template>