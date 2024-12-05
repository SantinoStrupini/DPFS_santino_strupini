
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductCategory extends Model {
    static associate(models) {
      this.hasMany(models.Product, {
        foreignKey: 'category_id',
        as: 'products',
      });
    }
  }
  
  ProductCategory.init(
    {
      name: {
        type: DataTypes.STRING(128),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ProductCategory',
      tableName: 'product_categories',
      timestamps: false,
    }
  );
  return ProductCategory;
};
