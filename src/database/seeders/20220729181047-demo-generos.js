module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Generos",
      [
        {
          descr_genero: "comédia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_genero: "terror",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_genero: "drama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_genero: "suspense",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_genero: "romance",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_genero: "história",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_genero: "animação",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_genero: "documentário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Generos", null, {});
  },
};