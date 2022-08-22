const {Router} = require('express');
const router = Router();
const { milistaController,buscarLista} = require('../controllers/listaController');

//Router para imprimir la lista
router.get('/', milistaController);
router.post('/', buscarLista);

module.exports = router;