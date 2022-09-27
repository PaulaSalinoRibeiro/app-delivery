const salesProduct = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProducts', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, field: 'sale_id' }, 
    productId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, field: 'product_id' }, 
    quantity: { type: DataTypes.INTEGER }
  }, {
    tableName: 'sales_products',
    timestamps: false,
    undesrcored: true,
  })

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    })
    models.Product.belongsToMany(models.Sale, {
      as: 'sale',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    })
  };

  // SalesProduct.associate = (models) => {
  //   models.Sale.belongsToMany(models.Product, {
  //     through: SalesProduct,
  //     foreignKey: 'saleId',
  //     otherKey: 'productId',
  //     as: 'products'
  //   })
  // }

  return SalesProduct;
}


module.exports = salesProduct;