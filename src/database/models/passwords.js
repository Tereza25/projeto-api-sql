'use strict';
module.exports = (sequelize, DataTypes) => {
  const Passwords = sequelize.define('Passwords', {
    hash_senha: DataTypes.STRING
  }, {});
  Passwords.associate = function(models) {
    Passwords.hasOne(models.Users, {
        foreignKey: 'senha_id', as: 'Users'
      });
    }
  return Passwords;
};