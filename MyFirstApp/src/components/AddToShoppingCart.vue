<script>

export default {
  components: {},
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data: () => {
    return {
     
    };
  },
  methods: {
    addToCart(){
      const selectedProducts = [];
      if(localStorage.getItem("shopping_cart")){
        selectedProducts.splice(0, selectedProducts.length, ...JSON.parse(localStorage.getItem("shopping_cart")))
      }
      selectedProducts.push(this.product)
      localStorage.setItem("shopping_cart", JSON.stringify(selectedProducts))
    }
  }
};
</script>

<template>
  <button class="btn-success" @click="addToCart()">Add to cart</button>
</template>

<style scoped>
  button{
    border-radius: 10px;
  }
</style>