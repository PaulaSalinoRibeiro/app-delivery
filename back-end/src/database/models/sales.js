const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncremnt: true,
      primaryKey: true
    },
    userId: { type: DataTypes.INTEGER,  foreignKey: true },
    sellerId: { type: DataTypes.INTEGER,  foreignKey: true },
    totalPrice: { type: DataTypes.DECIMAL },
    deliveryAddress: { type: DataTypes.STRING },
    deliveryNumber: { type: DataTypes.STRING },
    saleDate: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING }
  }, {
    tableName: 'sales',
    timestamps: false,
    undesrcored: true,
  })

  return Sale;
}

Sale.associate = (models) => {
  Sale.belongsTo(models.User, {
    foreingKey: 'userId', as: 'user'
  });
}

module.exports = Sale;