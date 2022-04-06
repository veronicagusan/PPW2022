<script>
import CList from "../components/List.vue";
import CDetails from "../components/Details.vue";
import {usePersonsStore} from "../stores/persons";

export default {
  components: { CDetails, CList },

  setup() {
    const store = usePersonsStore();

    return { store }
  },

  data: () => ({
    item: null,
    list: [
      {
        name: "Gusan Veronica",
        phone: "068143827",
        email: "veronica@gmail.com",
      },
      {
        name: "Amoasii David",
        phone: "068142758",
        email: "dave@gmail.com",
      },
      {
        name: "Cononova Ana",
        phone: "068147989",
        email: "ana@gmail.com",
      },
      {
        name: "Nicolaiciua Anastasia",
        phone: "068146345",
        email: "anastasia@gmail.com",
      },
      {
        name: "Raileanu Dina",
        phone: "068146347",
        email: "dina@gmail.com",
      },
    ],
  }),

  mounted() {
    if (localStorage.getItem("person")) {
      this.item = JSON.parse(localStorage.getItem("person"));
    }
  },

  methods: {
    setItem(item) {
      this.item = item;

      localStorage.setItem("selected_person", JSON.stringify(item));
    },
  },
};
</script>

<template>
  <div class="container">
    <c-list @input="setItem" :list="store.getPersons"></c-list>
    <c-details :person="item"></c-details>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
