'use strict';
const {
  Model
} = require('sequelize');
const Quiz = require('./quiz.js');
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models['question'].hasOne(models['quiz']);
      models['question'].hasMany(models['alternative']);
    }
  };
  question.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    createAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    label: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    order: { type: DataTypes.INTEGER, allowNull: false },
    quiz_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Quiz,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
  }, {
    sequelize,
    modelName: 'question',
    indexes: [{ unique: true, fields: ['label'] }]
  });

  return question;
};