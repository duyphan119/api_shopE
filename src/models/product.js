"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.hasMany(models.Comment, {
        foreignKey: "product_id",
        as: "comments",
      });
      Product.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category",
      });
      Product.hasMany(models.ProductDetail, {
        foreignKey: "product_id",
        as: "product_details",
      });
      Product.hasMany(models.ProductImage, {
        foreignKey: "product_id",
        as: "product_images",
      });
      Product.hasMany(models.WishList, {
        foreignKey: "product_id",
        as: "products",
      });
      // define association here
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      price: DataTypes.INTEGER,
      thumbanil: DataTypes.STRING,
      description: DataTypes.STRING,
      new_price: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
