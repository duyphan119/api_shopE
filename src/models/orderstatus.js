"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderStatus.hasMany(models.Order, {
        foreignKey: "order_status_id",
        as: "orders",
      });
      // define association here
    }
  }
  OrderStatus.init(
    {
      title: DataTypes.STRING,
      cancel_order: DataTypes.BOOLEAN,
      is_completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "OrderStatus",
    }
  );
  return OrderStatus;
};
