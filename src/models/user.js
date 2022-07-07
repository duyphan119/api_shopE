"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Cart, {
        foreignKey: "user_id",
        as: "cart",
      });
      User.hasMany(models.Comment, {
        foreignKey: "user_id",
        as: "comments",
      });
      User.hasMany(models.Order, {
        foreignKey: "user_id",
        as: "orders",
      });
      User.hasMany(models.ReplyComment, {
        foreignKey: "user_id",
        as: "reply_comments",
      });
      User.hasMany(models.WishList, {
        foreignKey: "user_id",
        as: "items",
      });
      // define association here
    }
  }
  User.init(
    {
      full_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone_number: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      avatar: DataTypes.STRING,
      district: DataTypes.STRING,
      ward: DataTypes.STRING,
      is_admin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
