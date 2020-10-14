"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          userId: 1,
          storeId: 1,
          delivererId: 1,
          orderTotal: 10,
          status: "pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          storeId: 1,
          delivererId: 2,
          orderTotal: 15,
          status: "accepted",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          storeId: 1,
          delivererId: 3,
          orderTotal: 23,
          status: "delivered",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
