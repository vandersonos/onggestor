'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('quiz', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      createAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
      name: { type: Sequelize.STRING, allowNull: false },
      description: { type: Sequelize.STRING, allowNull: false }
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('quiz');
  }
};
