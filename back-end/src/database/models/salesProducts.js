const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProducts', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, field: 'sale_id' }, 
    productId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, field: 'product_id' }, 
    quantity: { type: DataTypes.INTEGER }
  }, {
    tableName: 'sales_products',
    timestamps: false,
    undesrcored: true,
  })

  return salesProduct;
}

salesProduct.associate = (models) => {
  models.Sale.belongsToMany(models.Product, {
    as: 'product',
    through: salesProduct,
    foreignKey: 'salesId',
    otherKey: 'productId'
  })
  models.Product.belongsToMany(models.Sale, {
    as: 'sale',
    through: salesProduct,
    foreignKey: 'productId',
    otherKey: 'salesId'
  })
};

module.exports = salesProduct;