const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER, 
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:  DataTypes.STRING,
    role:  DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
  });

  // User.associate = (models) => {
  //   User.hasMany(models.Sale, {
  //     foreingKey: 'id', as: 'user'
  //   });
  // }

  return User;
}


module.exports = User