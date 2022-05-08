module.exports = (sequelize, DataTypes) => {
  const User_admin = sequelize.define('User-admin', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'User-admin',
    underscored: true,
  });

  // User_admin.associate = (models) => {
  //   User_admin.hasOne(models.Address,
  //     { foreignKey: 'employee_id', as: 'addresses' });
  // };

  return User_admin;
};