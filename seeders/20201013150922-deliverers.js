"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "deliverers",
      [
        {
          fullName: "rider1",
          email: "r1@1.com",
          phoneNumber: 1234567,
          password: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "rider2",
          email: "r2@2.com",
          phoneNumber: 1234567,
          password: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "rider3",
          email: "r3@3.com",
          phoneNumber: 1234567,
          password: "3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("deliverers", null, {});
  },
};
