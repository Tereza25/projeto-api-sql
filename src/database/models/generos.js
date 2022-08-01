"use strict";
module.exports = (sequelize, DataTypes) => {
  const Generos = sequelize.define('Generos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    descr_genero: DataTypes.STRING,
  }, {});
  Generos.associate = function(models) {
    Generos.hasMany(models.Generos, {
        foreignKey: 'descr_genero', as: 'Filmes'
      });
    }
  return Generos;
};