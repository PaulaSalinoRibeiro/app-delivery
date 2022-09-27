const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    urlImage:  {
      type: DataTypes.STRING,
    }
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  // Product.associate = (models) => {
  //   Product.belongsTo(models.Sale, {
  //     foreingKey: 'sale_id', as: 'sale'
  //   });
  // }

 return Product;
}

module.exports = Product