"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class deliveryLocation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  deliveryLocation.init(
    {
      longitude: DataTypes.INTEGER,
      latitude: DataTypes.INTEGER,
      delivererId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "deliveryLocation",
    }
  );
  return deliveryLocation;
};
