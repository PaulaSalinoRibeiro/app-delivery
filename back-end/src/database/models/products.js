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
    timestamps: false,
    underscored: true,
  });

 return Product;
}

module.exports = Product