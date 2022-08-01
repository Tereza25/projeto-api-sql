'use strict';
module.exports = (sequelize, DataTypes) => {
  const Filmes = sequelize.define('Filmes', {
    titulo: DataTypes.STRING,
    ano: DataTypes.STRING,
    duracao: DataTypes.STRING,
  }, {});
  Filmes.associate = function(models) {
    Filmes.belongsTo(models.Diretores, {
      foreignKey: 'diretor_id', as: 'Diretores'
    });
    Filmes.belongsTo(models.Generos, {
      foreignKey: 'descr_genero', as: 'Generos'
    });
  };
  return Filmes;
};