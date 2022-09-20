const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    salesId: { type: DataTypes.INTEGER, primaryKey: true }, 
    productId: { type: DataTypes.INTEGER, primaryKey: true }, 
    quantity: { type: DataTypes.INTEGER }
  }, {
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