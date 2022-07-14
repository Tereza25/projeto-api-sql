module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Filmes', [
    {
     titulo:'Get out' ,
     genero: 'terror',
     direcao: 'Jordan Peele',
     duracao: '104min',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     titulo: 'Us',
     genero: 'terror',
     direcao: 'Jordan Peele',
     duracao: '121min',
     createdAt: new Date(),
     updatedAt: new Date()
     }
  ], {});
 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Livro', null, {});

  }
};

