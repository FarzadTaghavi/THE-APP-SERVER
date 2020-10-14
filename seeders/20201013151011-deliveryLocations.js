"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "deliveryLocations",
      [
        {
          longitude: 232342,
          latitude: 111893,
          delivererId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          longitude: 393922,
          latitude: 110029,
          delivererId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("deliveryLocations", null, {});
  },
};
