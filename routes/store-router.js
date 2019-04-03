const router = require('express').Router();
const StoreController = require('../controllers/store-controller');

// data encapsulation. The user doesn't really need to see what's going on hihi
/*
router.get('/store', StoreController.findAllStores);
router.get('/store/:store_id', StoreController.findStoreById);
router.post('/store', StoreController.addStore);
router.post('/store', StoreController.deleteStore);
router.post('/store/:store_id', StoreController.editStore);
*/
router.get('/all-stores', StoreController.findAllStores);
router.get('/find-store/:store_id', StoreController.findStoreById);
router.get('/form', StoreController.formPage);
router.get('/add', StoreController.addStore);
router.get('/random-store', StoreController.randomStore);
module.exports = router;