'use strict';
const {
  Model
} = require('sequelize');
const Question = require('./question.js');
const Patient = require('./patients.js');
module.exports = (sequelize, DataTypes) => {
  class response extends Model {
    static associate(models) {
      models['response'].hasOne(models['question']);
      models['response'].hasOne(models['patients']);
    }
  };
  response.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    createAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    label: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.STRING, allowNull: false },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Question,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Patient,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    }
  }, {
    sequelize,
    modelName: 'response',
    indexes: [{ unique: true, fields: ['label'] }]
  });

  return response;
};