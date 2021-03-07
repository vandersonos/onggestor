'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models['units'].hasMany(models['users']);
    }
  };
  users.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    unitId: { type: DataTypes.INTEGER, foreignKey: 'units' },
    createAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    hash: { type: DataTypes.STRING, allowNull: false },
    salt: { type: DataTypes.STRING, allowNull: false },
    username: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    url_img: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
  }, {
    sequelize,
    modelName: 'users',
    indexes: [{ unique: true, fields: ['username'] }]
  });
  return users;
};