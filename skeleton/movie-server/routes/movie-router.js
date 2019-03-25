/*
+---------------------------------------------------------------+
| movie-router.js 												|
+---------------------------------------------------------------+
| Set-up routes. Makes use of the Router() function from the	|
| 'express' package.											|
+---------------------------------------------------------------+
*/

const router = require('express').Router();
const MovieController = require('../controllers/movie-controller');

/*
 +--------+------------------+
 | method | route 			 |
 +--------+------------------+
 | GET    | /find-all		 |
 | GET 	  |	/find-by-id/:_id |
 | POST   | /add			 |
 | POST   |	/delete			 |
 | POST   |	/edit/:_id		 |
 +--------+------------------+ 
 */

router.get('/find-all', MovieController.findAll);
router.get('/find-by-id/:_id', MovieController.findById);
router.post('/add', MovieController.add);
router.post('/delete', MovieController.delete);
router.post('/edit/:_id', MovieController.edit)
module.exports = router;
