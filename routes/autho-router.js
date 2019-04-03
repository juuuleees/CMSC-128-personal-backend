const router = require('express').Router(); // Requires Router for us to be able to use routing functions
const AuthoController = require('../controllers/autho-controller'); // Gets the Resto controller and associates the functions per route here

router.post('/authoCheck', AuthoController.checkAcc);
router.get('/', AuthoController.home);

module.exports = router; // Basically exports everything so that app.js can use all the routes here (Such convenient one liner lmao)
