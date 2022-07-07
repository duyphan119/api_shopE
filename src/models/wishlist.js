"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WishList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      WishList.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });
      WishList.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
      // define association here
    }
  }
  WishList.init(
    {
      product_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "WishList",
    }
  );
  return WishList;
};
