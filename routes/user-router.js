const router = require('express').Router(); // Requires Router for us to be able to use routing functions
const UserController = require('../controllers/user-controller'); // Gets the Resto controller and associates the functions per route here

router.get('/all-users', UserController.findAllUsers);
router.get('/find-user/:user_id', UserController.findUserByID);
router.get('/form', UserController.formPage);
router.post('/add', UserController.add);
// router.post('/edit', UserController.edit);
router.post('/delete', UserController.delete);
module.exports = router; // Basically exports everything so that app.js can use all the routes here (Such convenient one liner lmao)
