'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductHasBill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductHasBill.init({
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bill_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'ProductHasBill',
    tableName: 'productHasBill',
    timestamps: false
  });
  return ProductHasBill;
};