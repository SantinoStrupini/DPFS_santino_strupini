'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductImg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductImg.init({
    url: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    product_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
  }, 
    {
    sequelize,
    modelName: 'ProductImg',
    tableName: 'productImg',
    timestamps: false
});
  return ProductImg;
};