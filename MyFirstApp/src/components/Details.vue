<template>
  <div v-if="person" class="list">
    <div>Name: {{ person.name }}</div>
    <div>Phone: {{ person.phone }}</div>
    <div>Email: {{ person.email }}</div>
  </div>
</template>

<script>
export default {
  name: "CDetails",
  props: {
    person: Object,
  },
};
</script>

<style scoped>
.list {
  padding: 12px;
  width: 50%;
  height: 300px;
  background-color: #2e2e2e;
  color: white;
  font-family: "Kalam", cursive;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  padding: 50px;
  margin-top:100px;
}
</style>
