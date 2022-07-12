"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductDetail.hasMany(models.CartItem, {
        foreignKey: "product_detail_id",
        as: "items",
      });
      ProductDetail.hasMany(models.OrderItem, {
        foreignKey: "product_detail_id",
        as: "orderItems",
      });
      ProductDetail.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });
      ProductDetail.belongsTo(models.Color, {
        foreignKey: "color_id",
        as: "color",
      });
      ProductDetail.belongsTo(models.Size, {
        foreignKey: "size_id",
        as: "size",
      });
    }
  }
  ProductDetail.init(
    {
      product_id: DataTypes.INTEGER,
      color_id: DataTypes.INTEGER,
      size_id: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      sku: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductDetail",
    }
  );
  return ProductDetail;
};
