"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductImage.belongsTo(models.Color, {
        foreignKey: "color_id",
        as: "color",
      });
      ProductImage.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });
      // define association here
    }
  }
  ProductImage.init(
    {
      color_id: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
      path: DataTypes.STRING,
      file_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductImage",
    }
  );
  return ProductImage;
};
