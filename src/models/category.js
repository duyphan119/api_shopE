"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.hasMany(models.Product, {
        foreignKey: "category_id",
        as: "products",
      });
      Category.belongsTo(Category, {
        foreignKey: "parent_id",
        as: "parent",
      });
      Category.hasMany(Category, {
        foreignKey: "parent_id",
        as: "children",
      });
      Category.hasMany(models.DiscountCategory, {
        foreignKey: "category_id",
        as: "discounts",
      });
    }
  }
  Category.init(
    {
      name: DataTypes.STRING,
      slug: DataTypes.STRING,
      parent_id: DataTypes.INTEGER,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
