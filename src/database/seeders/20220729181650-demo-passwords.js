module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Passwords",
      [
        {
          hash_senha: "lasanha",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hash_senha: "banana",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          hash_senha: "catarina",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Passwords", null, {});
  },
};
