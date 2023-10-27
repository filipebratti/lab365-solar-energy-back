'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('unidades', {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nickname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      active: {
        type: Sequelize.ENUM('S', 'N'),
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }

    });

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('unidades');
  }
};
