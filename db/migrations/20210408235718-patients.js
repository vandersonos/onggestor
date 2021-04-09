'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('patients', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      createAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      name: { type: Sequelize.STRING, allowNull: false },
      data_entrada: { type: Sequelize.DATE, allowNull: false },
      data_nascimento: { type: Sequelize.DATE, allowNull: false },
      city: { type: Sequelize.STRING, allowNull: false },
      uf: { type: Sequelize.STRING, allowNull: false },
      cpf: { type: Sequelize.STRING, allowNull: false },
      cd_sexo: { type: Sequelize.STRING, allowNull: false },
      cor: { type: Sequelize.STRING, allowNull: true },
      pathology: { type: Sequelize.STRING, allowNull: true },
      addres: { type: Sequelize.STRING, allowNull: false },
      district: { type: Sequelize.STRING, allowNull: false },
      cep: { type: Sequelize.STRING, allowNull: false },
      url_img: { type: Sequelize.STRING, allowNull: true },
      email: { type: Sequelize.STRING, allowNull: false },
      phone: { type: Sequelize.STRING, allowNull: false },
    })

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('patients');
  }
};
