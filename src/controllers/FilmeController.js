const database = require("../models/filmes.js");
console.log(database)
class FilmesController {
  static async pegaTodosOsFilmes(req, res) {
    try {
      const todosOsFilmes = await database().findAll();
      console.log(todosOsFilmes)
      return res.status(200).json(todosOsFilmes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};


module.exports = FilmesController;
