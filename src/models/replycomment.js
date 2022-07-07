"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReplyComment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ReplyComment.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
      ReplyComment.belongsTo(models.Comment, {
        foreignKey: "comment_id",
        as: "comment",
      });
      // define association here
    }
  }
  ReplyComment.init(
    {
      user_id: DataTypes.INTEGER,
      content: DataTypes.STRING,
      comment_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ReplyComment",
    }
  );
  return ReplyComment;
};
