const { Router } = require('express');
const router = Router();
const {agregarController, agregarCancionController} = require('../controllers/agregarController')


//Router para imprimir Agregar Musica
router.get('/', agregarController);

//Router para guardar la Nueva Cancion
router.post('/', agregarCancionController);

module.exports = router;
