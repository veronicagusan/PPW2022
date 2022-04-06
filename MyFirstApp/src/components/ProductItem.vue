<script>
import AddToShoppingCart from "./AddToShoppingCart.vue";
import RemoveFromShoppingCart from "./RemoveFromShoppingCart.vue";
export default {
  components: {
    AddToShoppingCart,
    RemoveFromShoppingCart
  },
  props: {
    product: {
      type: Object,
      required: true
    },
    mode: {
      type: String,
      required: false,
      default: "catalog"
    }
  },
  methods: {
    productRemoved(){
      this.$emit("onRemoveProduct");
    }
  }
};
</script>

<template>
  <tr>
    <td>
      <img :src="`${product.photo}?${productIndex}`" alt="" />
    </td>
    <td class="product-name">{{ product.name }}</td>
    <td>
      {{ product.price }} MDL
      <add-to-shopping-cart 
        v-if="mode === 'catalog'" 
        :product="product"
      />
      <remove-from-shopping-cart 
        v-else
        :product="product"
        @onRemoveProduct="productRemoved()"
      />
    </td>
  </tr>
</template>

<style scoped>
  .product-name{
    color: yellow;
  }
</style>