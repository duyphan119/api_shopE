'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('OrderStatuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      cancel_order: {
        type: Sequelize.BOOLEAN
      },
      is_completed: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('OrderStatuses');
  }
};