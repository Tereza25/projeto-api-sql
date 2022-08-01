'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Users.associate = function(models) {
    Users.belongsTo(models.Passwords, {
      foreignKey: 'senha_id', as: 'Passwords'
    });
   };
  return Users;
};