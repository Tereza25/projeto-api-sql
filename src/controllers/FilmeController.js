const database = require("../database/models");
class FilmesController {
  static async pegaTodosOsFilmes(req, res) {
    try {
      const todosOsFilmes = await database.Filmes.findAll();
      console.log(todosOsFilmes)
      return res.status(200).json(todosOsFilmes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmFilme(req, res) {
    const { id } = req.params
    try {
      const umFilme = await database.Filmes.findOne({
        where: {
          id: Number(id)
        }
      }); 
      return res.status(200).json(umFilme);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};


module.exports = FilmesController;
