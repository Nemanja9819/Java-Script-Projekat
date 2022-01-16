'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
    {
      username: "Gazda",
      password: "Admin"
    },
    {
      username: "Radnik1",
      password: "123456"
    },
    {
      username: "Radnik2",
      password: "123456"
    },
    {
      username: "Radnik3",
      password: "123456"
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
