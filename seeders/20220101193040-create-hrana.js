'use strict';


module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('hranas', [
      {
        ime: "Margarita",
        sastojci: "Pelat,kačkavalj",
        cena: "400"
      },
      {
        ime: "Capricciosa",
        sastojci: "Pelat,kačkavalj,šunka,pečurke",
        cena: "450"
      },
      {
        ime: "Vesuvio",
        sastojci: "Pelat,kačkavalj,šunka,masline",
        cena: "450"
      },
      {
        ime: "Tonno",
        sastojci: "Pelat,kačkavalj,tunjevina,masline",
        cena: "480"
      },
      {
        ime: "Vegeteriana",
        sastojci: "Pelat,kačkavalj,paradajz,paprika,luk,pečurke",
        cena: "420"
      },
      {
        ime: "Sendvič šunka",
        sastojci: "Šunka,kačkavalj,prilozi",
        cena: "200"
      },
      {
        ime: "Sendvič pečenica",
        sastojci: "Pečenica,kačkavalj,prilozi",
        cena: "250"
      },
      {
        ime: "Sendvič kulen",
        sastojci: "Kulen,kačkavalj,prilozi",
        cena: "250"
      },
      {
        ime: "Palačinka šunka",
        sastojci: "Šunka,pavlaka,kačkavalj,pečurke",
        cena: "280"
      },
      {
        ime: "Palačinka pečenica",
        sastojci: "Pečenica,pavlaka,kačkavalj,pečurke",
        cena: "300"
      },
      {
        ime: "Palačinka nutela",
        sastojci: "Nutela,plazma",
        cena: "250"
      },
      {
        ime: "Palačinka eurokrem",
        sastojci: "Eurokrem,plazma",
        cena: "220"
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
