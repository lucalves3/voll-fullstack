module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'User',
    underscored: true,
  });

  // User.associate = (models) => {
  //   User.hasOne(models.Address,
  //     { foreignKey: 'employee_id', as: 'addresses' });
  // };

  return User;
};