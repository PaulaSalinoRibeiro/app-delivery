const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: { type: DataTypes.INTEGER,  foreignKey: true, field: 'user_id' },
    sellerId: { type: DataTypes.INTEGER,  foreignKey: true,  field: 'seller_id' },
    totalPrice: { type: DataTypes.DECIMAL,  field: 'total_price'  },
    deliveryAddress: { type: DataTypes.STRING,  field: 'delivery_address' },
    deliveryNumber: { type: DataTypes.STRING,  field: 'delivery_number' },
    saleDate: { type: DataTypes.DATE, defaultValue: new Date(), field: 'sale_date' },
    status: { type: DataTypes.STRING }
  }, {
    tableName: 'sales',
    timestamps: false,
    undesrcored: true,
  })

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' },
    );
    Sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' },
    );
  };

  // Sale.associate = (models) => {
  //   Sale.belongsTo(models.User, {
  //     foreingKey: 'user_id', as: 'user'
  //   })
  //   Sale.hasMany(models.Product, {
  //     foreignKey: 'product_id', as: 'products'
  //   })
  // }

  return Sale;
}


module.exports = Sale;