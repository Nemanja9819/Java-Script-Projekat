'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('pices', [
      {
        ime: "Koka kola",
        cena: "120",
      },
      {
        ime: "Fanta",
        cena: "120",
      },
      {
        ime: "Ice tea limun",
        cena: "120",
      },
      {
        ime: "Ice tea breskva",
        cena: "120",
      },
      {
        ime: "Narandza",
        cena: "150",
      },
      {
        ime: "Borovnica",
        cena: "160",
      },
      {
        ime: "Jagoda",
        cena: "150",
      },
      {
        ime: "Jelen pivo",
        cena: "200", 
      },
      {
        ime: "Zajecarsko",
        cena: "200",
      },
      {
        ime: "Tuborg",
        cena: "250",
      },
      {
        ime: "Topla cokolada",
        cena: "250",
      },
      {
        ime: "Esspreso",
        cena: "150",
      },
      {
        ime: "Makijato",
        cena: "160",
      },
      {
        ime: "Nescafe",
        cena: "200",
      },
      {
        ime: "Caj",
        cena: "120",
      }
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
