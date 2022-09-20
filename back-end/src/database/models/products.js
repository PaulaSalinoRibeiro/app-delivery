const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url:  DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
  });

 return Products;
}

module.exports = Products