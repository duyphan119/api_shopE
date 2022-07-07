"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
      Order.belongsTo(models.Coupon, {
        foreignKey: "coupon_id",
        as: "coupon",
      });
      Order.belongsTo(models.OrderStatus, {
        foreignKey: "order_status_id",
        as: "order_status",
      });
      Order.hasMany(models.OrderItem, {
        foreignKey: "order_id",
        as: "items",
      });

      // define association here
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      full_name: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      total_price: DataTypes.INTEGER,
      city: DataTypes.STRING,
      district: DataTypes.STRING,
      ward: DataTypes.STRING,
      address: DataTypes.STRING,
      coupon_id: DataTypes.INTEGER,
      order_status_id: DataTypes.INTEGER,
      delivery_price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
