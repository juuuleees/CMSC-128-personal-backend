const router = require('express').Router(); // Requires Router for us to be able to use routing functions
const RestoController = require('../controllers/resto-controller'); // Gets the Resto controller and associates the functions per route here

router.get('/all-restos', RestoController.findAllRestos);
router.get('/find-resto/:restaurant_id', RestoController.findRestoByID);
module.exports = router; // Basically exports everything so that app.js can use all the routes here (Such convenient one liner lmao)
