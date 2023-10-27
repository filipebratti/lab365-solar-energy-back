'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('geracaos', { 

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      unidade_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'unidades',
          key: 'id'
        }
      },
      reference_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      total_generated: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('geracao');
  }
};