const { Router } = require('express');
const FilmesController = require('../controllers/FilmeController.js');

const router = Router();

router.get('/filmes', FilmesController.pegaTodosOsFilmes);
router.get('/filmes/:id', FilmesController.pegaUmFilme);
router.post('/filmes', FilmesController.criaFilme);
router.put('/filmes/:id', FilmesController.atualizaFilme);
router.delete('/filmes/:id', FilmesController.apagaFilme);


module.exports = router;