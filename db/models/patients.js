'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //models['patients'].hasMany(models['pathology']);
    }
  };
  patients.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    createAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    name: { type: DataTypes.STRING, allowNull: false },
    data_entrada: { type: DataTypes.DATE, allowNull: false },
    data_nascimento: { type: DataTypes.DATE, allowNull: false },
    city: { type: DataTypes.STRING, allowNull: false },
    uf: { type: DataTypes.STRING, allowNull: false },
    cpf: { type: DataTypes.STRING, allowNull: false },
    cd_sexo: { type: DataTypes.STRING, allowNull: false },
    cor: { type: DataTypes.STRING, allowNull: true },
    pathology: { type: DataTypes.STRING, allowNull: true },
    addres: { type: DataTypes.STRING, allowNull: false },
    district: { type: DataTypes.STRING, allowNull: false },
    cep: { type: DataTypes.STRING, allowNull: false },
    url_img: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
  }, {
    sequelize,
    modelName: 'patients',
    indexes: [
      { unique: true, fields: ['city'] },
      { unique: true, fields: ['cpf'] }
    ]
  });

  return patients;
};