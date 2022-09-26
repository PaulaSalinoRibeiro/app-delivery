'use strict';

const { DECIMAL } = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        field: 'user_id',
        type: Sequelize.INTEGER,
        referencies : {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      sellerId: {
        allowNull: false,
        field: 'seller_id',
        type: Sequelize.INTEGER,
        referencies : {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
        field: 'total_price'
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_address'
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_number'
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
        defaultValue: Sequelize.fn('now')
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales', {})
  }
};
