// Require de Express
const express = require('express');
// require del metodo router
const router = express.Router();
// Require Controllers
const heroesController = require('../controllers/heroesController');
const mainController = require('../controllers/mainController');

router.get('/',heroesController.root);
router.get('/detalle/:id',heroesController.detalle);
router.get('/bio/:id/:ok?',heroesController.detalleBio);

module.exports = router;