'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Filmes', 'pais', {
      allowNull: false,
      type: Sequelize.STRING
    })
  },
  down: (queryInterface) => {
    return queryInterface.removeColumn('Filmes', 'pais')
  }
}
