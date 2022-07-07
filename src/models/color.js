"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Color.hasMany(models.ProductDetail, {
        foreignKey: "color_id",
        as: "product_details",
      });
      Color.hasMany(models.ProductImage, {
        foreignKey: "color_id",
        as: "product_images",
      });
    }
  }
  Color.init(
    {
      name: DataTypes.STRING,
      color_code: DataTypes.STRING,
      sku: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Color",
    }
  );
  return Color;
};
