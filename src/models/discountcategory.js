"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DiscountCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DiscountCategory.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category",
      });
      // define association here
    }
  }
  DiscountCategory.init(
    {
      percent: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "DiscountCategory",
    }
  );
  return DiscountCategory;
};
