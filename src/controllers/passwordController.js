const database = require("../database/models");

class PasswordController {
  static async pegaTodasAsSenhas(req, res) {
    try {
      const todosOsFilmes = await database.Passw.findAll();
      console.log(todosOsFilmes);
      return res.status(200).json(todosOsFilmes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = FilmesController;