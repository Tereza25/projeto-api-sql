'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Filmes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      genero_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Generos', key: 'id'}
     },
     diretor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Diretores', key: 'id'}
     },
      ano: {
        type: Sequelize.STRING
      },
      duracao: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Filmes');
  }
};