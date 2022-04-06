import { defineStore } from "pinia";

export const usePersonsStore = defineStore({
  id: "persons",

  state: () => ({
    persons: [
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
  getters: {
    getPersons: (state) => state.persons,
  },
});
