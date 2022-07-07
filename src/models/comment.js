"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
      Comment.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });
      Comment.hasMany(models.ReplyComment, {
        foreignKey: "comment_id",
        as: "reply_comments",
      });
      // define association here
    }
  }
  Comment.init(
    {
      user_id: DataTypes.INTEGER,
      content: DataTypes.STRING,
      rate: DataTypes.INTEGER,
      product_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );
  return Comment;
};
