<script>
import ProductItem from "../components/ProductItem.vue";

export default {
  components: {
    ProductItem
  },
  data: () => {
    return {
      products: [
        {
          photo: "https://loremflickr.com/100/100",
          name: "Keyboard",
          price: 156
        },
        {
          photo: "https://loremflickr.com/100/100",
          name: "Mouse",
          price: 98
        },
        {
          photo: "https://loremflickr.com/100/100",
          name: "Laptop",
          price: 8745
        },
        {
          photo: "https://loremflickr.com/100/100",
          name: "Smartphone",
          price: 4399
        }
      ]
    };
  },
};
</script>

<template>
  <div>
    <h1>This is Products page</h1>
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
          mode="catalog"
        />
      </tbody>
    </table>
    
  </div>
</template>