const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    userId: { type: DataTypes.INTEGER },
    sellerId: { type: DataTypes.INTEGER },
    totalPrice: { type: DataTypes.DECIMAL },
    deliveryAddress: { type: DataTypes.STRING },
    deliveryNumber: { type: DataTypes.STRING },
    saleDate: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING }
  }, {
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