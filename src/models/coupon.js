"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Coupon.hasMany(models.Order, {
        foreignKey: "coupon_id",
        as: "orders",
      });
      // define association here
    }
  }
  Coupon.init(
    {
      percent: DataTypes.INTEGER,
      code: DataTypes.STRING,
      start: DataTypes.DATE,
      end: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Coupon",
    }
  );
  return Coupon;
};
