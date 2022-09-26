'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'sale_id'
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        field: 'product_id'
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales_products', {})
  }
};
