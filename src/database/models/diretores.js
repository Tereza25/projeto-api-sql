"use strict";
module.exports = (sequelize, DataTypes) => {
  const Diretores = sequelize.define('Diretores', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: DataTypes.STRING,
    pais: DataTypes.STRING,
  }, {});
  Diretores.associate = function(models) {
      Diretores.hasMany(models.Filmes, {
        foreignKey: 'diretor_id', as: 'Filmes'
      });
    }
  return Diretores;
};
