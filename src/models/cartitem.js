"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CartItem.belongsTo(models.Cart, {
        foreignKey: "cart_id",
        as: "cart",
      });
      CartItem.belongsTo(models.ProductDetail, {
        foreignKey: "product_detail_id",
        as: "product_detail",
      });
      // define association here
    }
  }
  CartItem.init(
    {
      cart_id: DataTypes.INTEGER,
      product_detail_id: DataTypes.INTEGER,
      is_completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "CartItem",
    }
  );
  return CartItem;
};
