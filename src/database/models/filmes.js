"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Filmes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Filmes.belongsTo(models.Generos, {
        foreignKey: 'genero_id'
     })
      Filmes.belongsTo(models.Diretores, {
        foreignKey: 'diretor_id'
   })
  }
}
  Filmes.init(
    {
      titulo: DataTypes.STRING,
      ano: DataTypes.STRING,
      duracao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Filmes",
    }
  );
  return Filmes;
};
