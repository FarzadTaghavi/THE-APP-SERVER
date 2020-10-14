"use strict";
const { Model } = require("sequelize");
const storetype = require("./storetype");
module.exports = (sequelize, DataTypes) => {
  class storeCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      storeCategory.hasMany(models.storeType);
    }
  }
  storeCategory.init(
    {
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "storeCategory",
    }
  );
  return storeCategory;
};
