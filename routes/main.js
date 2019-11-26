// Require de Express
const express = require('express');
// require del metodo router
const router = express.Router();
const mainController = require('../controllers/mainController');
router.get('/',mainController.root);
router.get('/creditos',mainController.creditos);

module.exports = router;