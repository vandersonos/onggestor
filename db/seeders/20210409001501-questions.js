'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('questions', [
      {
        label: 'Composição Famíliar',
        description: 'replicador',
        quiz_id: 1,
        order: 1
      },
      {
        label: 'Renda Famíliar',
        description: 'radio',
        quiz_id: 1,
        order: 2
      },
      {
        label: 'Situação Habitacional',
        description: 'radio',
        quiz_id: 1,
        order: 3
      },
      {
        label: 'Tipo de construção Moradia',
        description: '',
        quiz_id: 1,
        order: 4
      },
      {
        label: 'Número de quartos',
        description: 'number',
        quiz_id: 1,
        order: 5
      },
      {
        label: 'Número de salas',
        description: 'number',
        quiz_id: 1,
        order: 6
      },
      {
        label: 'Número de cozinha',
        description: 'number',
        quiz_id: 1,
        order: 7
      }
      , {
        label: 'Outros Cômodos',
        description: 'number',
        quiz_id: 1,
        order: 8
      },
      {
        label: 'Sanitário',
        description: 'radio',
        quiz_id: 1,
        order: 9
      },
      {
        label: 'Infra-estrutura Básica',
        description: 'checkbox',
        quiz_id: 1,
        order: 10
      },
      {
        label: 'Água',
        description: 'radio',
        quiz_id: 1,
        order: 11
      },
      {
        label: 'Dejetos',
        description: 'radio',
        quiz_id: 1,
        order: 12
      },
      {
        label: 'Iniciativa do primeiro contato',
        description: 'radio',
        quiz_id: 1,
        order: 13
      },
      {
        label: 'Resumo da Queixa ou Solicitação Inicial',
        description: 'textArea',
        quiz_id: 1,
        order: 14
      }
    ], {}
    );
    await queryInterface.bulkInsert('questions', [
      {
        label: 'Variáveis Significativas: (histórico profissional, orçamentário, Alimentação e habitação)',
        description: 'textArea',
        quiz_id: 2,
        order: 1
      },
      {
        label: 'Migração',
        description: 'textArea',
        quiz_id: 2,
        order: 2
      },
      {
        label: 'Doença diagnosticada',
        description: 'textArea',
        quiz_id: 2,
        order: 3
      },
      {
        label: 'Estado Aparente',
        description: '',
        quiz_id: 2,
        order: 4
      },
      {
        label: 'O que sabe sobre o diagnostico e o que pensa sobre o câncer?  ',
        description: 'textArea',
        quiz_id: 2,
        order: 5
      },
      {
        label: 'Diagnostico revelado à',
        description: 'textArea',
        quiz_id: 2,
        order: 6
      },
      {
        label: 'Antecedentes Significativos (primeiro sintoma providencia tomadas, Instituições procuradas, Seguiu o indicado? ',
        description: 'textArea',
        quiz_id: 2,
        order: 7
      }
      , {
        label: 'Estados de ânimo prevalentes quanto à situação',
        description: 'textArea',
        quiz_id: 2,
        order: 8
      },
      {
        label: 'Dinâmica da família frente à situação atual',
        description: 'textArea',
        quiz_id: 2,
        order: 9
      },
      {
        label: 'Sociabilidade; Lazer; Aspectos culturais (religião, praticante ou não, tipo de atividades sociais)',
        description: 'checkbox',
        quiz_id: 2,
        order: 10
      }
    ], {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {});

  }
};
