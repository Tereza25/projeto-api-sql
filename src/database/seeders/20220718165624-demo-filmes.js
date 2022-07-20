module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Filmes', [
    {
     titulo: 'A lenda de Candyman',
     genero_id: 2,
     diretor_id: 2,
     duracao: '91min',
     createdAt: new Date(),
     updatedAt: new Date()
    },
    {
     titulo: 'Um dia com Jerusa',
     genero_id: 3,
     diretor_id: 5,
     ano: '2014',
     createdAt: new Date(),
     updatedAt: new Date()
     },
    {
     titulo: '12 anos de escravidão',
     genero_id: 6,
     diretor_id: 4,
     ano: '2013',
     duracao: '',
     createdAt: new Date(),
     updatedAt: new Date()
     }

  ], {});
 
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Filmes', null, {});

  }
};