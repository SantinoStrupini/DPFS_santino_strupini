'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Category, {foreignKey: 'categories_id', targetKey: 'id', as: 'category'})
    }
  }
  User.init({
    userName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      categories_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};