const router = require('express').Router();

const controllerPaletas = require('../controllers/paleta.controller');

router.get('/all', controllerPaletas.findAllPaletasController);

router.get('/:id', controllerPaletas.findByIdPaletasController);

router.post('/create', controllerPaletas.postController);

router.put('/:id', controllerPaletas.putController);

router.delete('/:id', controllerPaletas.deleteController);

module.exports = router;
