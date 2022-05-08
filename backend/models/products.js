module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productName: DataTypes.STRING,
    category: DataTypes.STRING
  },
  {
    timestamps: false,
    tableName: 'Products',
    underscored: true,
  });

  // Products.associate = (models) => {
  //   Products.hasOne(models.Address,
  //     { foreignKey: 'employee_id', as: 'addresses' });
  // };

  return Products;
};