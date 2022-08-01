module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          nome: "Tereza Oliveira",
          email: "tereza@email.com",
          senha_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Juliana Amoasei",
          email: "aquijuz@email.com",
          senha_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Camila Pessoa",
          email: "camis@email.com",
          senha_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};