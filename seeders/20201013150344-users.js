"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "user1",
          email: "1@1.com",
          phoneNumber: 1234567,
          password: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "user2",
          email: "2@2.com",
          phoneNumber: 1234567,
          password: "2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "user3",
          email: "3@3.com",
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
    await queryInterface.bulkDelete("users", null, {});
  },
};
