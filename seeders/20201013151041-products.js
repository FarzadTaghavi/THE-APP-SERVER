"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "Bananen",
          image:
            "https://static.ah.nl/image-optimization/static/product/AHI_43545239363334393234_1_200x200_JPG.JPG?options=399,q85",
          price: 1.19,
          storeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pitloze rode druiven",
          image:
            "https://static.ah.nl/image-optimization/static/product/AHI_43545236323133393432_1_200x200_JPG.JPG?options=399,q85",
          price: 2.19,
          storeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mandarijnen net",
          image:
            "https://static.ah.nl/image-optimization/static/product/AHI_43545236323531393738_3_200x200_JPG.JPG?options=399,q85",
          price: 2.69,
          storeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Zoete kleine appeltjes",
          image:
            "https://static.ah.nl/image-optimization/static/product/AHI_43545236323531393738_3_200x200_JPG.JPG?options=399,q85",
          price: 2.24,
          storeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nederlandse aarbeien",
          image:
            "https://static.ah.nl/image-optimization/static/product/AHI_43545239363833373831_1_200x200_JPG.JPG?options=399,q85",
          price: 2.79,
          storeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
