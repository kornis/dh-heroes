// Require de Express
const express = require('express');
// require del metodo router
const router = express.Router();
<<<<<<< HEAD
const mainController = require("../controllers/mainController");
=======
const mainController = require('../controllers/mainController');
>>>>>>> 42fa40456559d8a3a4ec62681bd06e21c3d38c6c
router.get('/',mainController.root);
router.get('/creditos',mainController.creditos);

module.exports = router;