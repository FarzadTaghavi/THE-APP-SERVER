"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "storeTypes",
      [
        {
          type: "Restaurants",
          storeCategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "Supermarkets",
          storeCategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("storeTypes", null, {});
  },
};
