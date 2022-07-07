const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("shop_E", "root", null, {
  host: "localhost",
  dialect: "mysql",
  timezone: "+07:00",
  logging: false,
});

const connectDB = async () => {
  try {
    console.log("e");
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  connectDB,
};
