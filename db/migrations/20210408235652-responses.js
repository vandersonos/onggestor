'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('responses', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      createAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      label: { type: Sequelize.STRING, allowNull: false },
      value: { type: Sequelize.STRING, allowNull: false },
      question_id: {
        type: Sequelize.INTEGER, allowNull: false
      },
      patient_id: {
        type: Sequelize.INTEGER, allowNull: false
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('responses');
  }
};
