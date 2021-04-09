'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alternative extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //models['id_quiz'].hasMany(models['quiz']);
    }
  };
  alternative.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    createAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    label: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Question,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
      }
    },
  }, {
    sequelize,
    modelName: 'alternative',
    indexes: [{ unique: true, fields: ['label'] }]
  });

  return alternative;
};