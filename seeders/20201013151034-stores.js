"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stores",
      [
        {
          name: "Albert Heijn",
          longitude: 23234,
          latitude: 23423,
          storeTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jumbo",
          longitude: 48395,
          latitude: 23049,
          storeTypeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stores", null, {});
  },
};
