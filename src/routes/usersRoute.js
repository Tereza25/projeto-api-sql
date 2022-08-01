const { Router } = require('express');
const UsersController = require('../controllers/UserController.js');

const router = Router();

router.get('/users', UsersController.pegaTodosOsUsuarios);
router.get('/users/:id', UsersController.pegaUmUsuario);
router.post('/users', UsersController.criaUsuario);
router.put('/users/:id', UsersController.atualizaUsuario);
router.delete('/users/:id', UsersController.apagaUsuario);


module.exports = router;