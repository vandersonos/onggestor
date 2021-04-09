'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('quiz', [
      {
        id: 1,
        name: 'Estudo Sócio Econômico',
        description: ''
      }], {}
    );

    await queryInterface.bulkInsert('quiz', [{
      id: 2,
      name: 'Estudo Psicossocial',
      description: ''
    }
    ], {}
    );

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {});
    await queryInterface.bulkDelete('quiz', null, {});
  }
};
