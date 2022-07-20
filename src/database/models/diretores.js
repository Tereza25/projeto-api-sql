"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Diretores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Diretores.hasMany(models.Filmes, {
        foreignKey: 'diretor_id'
     })
    }
  }
  Diretores.init(
    {
      nome: DataTypes.STRING,
      pais: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Diretores',
    }
  );
  return Diretores;
};
