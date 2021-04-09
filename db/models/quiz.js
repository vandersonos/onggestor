'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models['quiz'].hasMany(models['questions']);

    }
  };
  quiz.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    createAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    order: { type: DataTypes.INTEGER, allowNull: false },

  }, {
    sequelize,
    modelName: 'quiz',
    indexes: [{ unique: true, fields: ['name'] }]
  });

  return quiz;
};