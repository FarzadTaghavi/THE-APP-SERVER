"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "user1",
          email: "1@1.com",
          phoneNumber: 1234567,
          password: bcrypt.hashSync("1", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "user2",
          email: "2@2.com",
          phoneNumber: 1234567,
          password: bcrypt.hashSync("2", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "user3",
          email: "3@3.com",
          phoneNumber: 1234567,
          password: bcrypt.hashSync("3", SALT_ROUNDS),
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
