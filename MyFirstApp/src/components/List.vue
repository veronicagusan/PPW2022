<template>
  <ul class="list">
    <li
      @click="$emit('input', item)"
      :key="index"
      v-for="(item, index) in list"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CList",

  props: {
    list: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.list {
  width: 50%;
  background-color: #2e2e2e;
  color: white;
  list-style-type: none;
  font-family: 'Kalam', cursive;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;
  padding: 50px;
  margin-top:100px;
  padding-left: 100px;
}

ul {
  padding: 12px;
  height: 300px;
}

li {
  cursor: pointer;
}

@media (hover: hover) {
  li:hover {
    color: #41B883;
    font-size:25px;
    list-style-image: url(C:\Users\egorc\Desktop\JS\pw1-2022-vue-is-mi\MyFirstApp\public\arrow.svg);
  }
}
</style>
