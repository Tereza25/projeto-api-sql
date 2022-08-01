module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Diretores",
      [
        {
          nome: "Jordan Peele",
          pais: "EUA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Nia DaCosta",
          pais: "EUA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Spike Lee",
          pais: "EUA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Steve McQueen",
          pais: "EUA",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Viviane Ferreira",
          pais: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Adélia Sampaio",
          pais: "Brasil",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Diretores", null, {});
  },
};