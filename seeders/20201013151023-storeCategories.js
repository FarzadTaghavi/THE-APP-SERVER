"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "storeCategories",
      [
        {
          type: "food",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: "liquor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("storeCategories", null, {});
  },
};
