"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      order.belongsToMany(models.product, {
        through: "orderItems",
        foreignKey: "orderId",
      });
    }
  }
  order.init(
    {
      userId: DataTypes.INTEGER,
      storeId: DataTypes.INTEGER,
      delivererId: DataTypes.INTEGER,
      orderTotal: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
