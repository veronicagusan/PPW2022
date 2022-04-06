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
    removeFromCart(){
      const selectedProducts = [];
      if(localStorage.getItem("shopping_cart")){
        selectedProducts.splice(0, selectedProducts.length, ...JSON.parse(localStorage.getItem("shopping_cart")))
      }
      selectedProducts.splice(0, 1);
      
      localStorage.setItem("shopping_cart", JSON.stringify(selectedProducts))

      this.$emit("onRemoveProduct");
    }
  }
};
</script>

<template>
  <button class="btn-danger" @click="removeFromCart()">Remove from cart</button>
</template>

<style scoped>
  button{
    border-radius: 10px;
  }
</style>