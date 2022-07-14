const { Router } = require('express');
const FilmesController = require('../controllers/FilmeController.js');

const router = Router();

router.get('/filmes', FilmesController.pegaTodosOsFilmes);

module.exports = router;