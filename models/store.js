"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    static associate(models) {
      store.hasMany(models.product);
      store.belongsTo(models.storeType);
    }
  }
  store.init(
    {
      name: DataTypes.STRING,
      longitude: DataTypes.INTEGER,
      latitude: DataTypes.INTEGER,
      storeTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "store",
    }
  );
  return store;
};
