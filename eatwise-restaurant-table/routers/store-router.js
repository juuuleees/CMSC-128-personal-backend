const router = require('express').Router();
const StoreController = require('../controllers/store-controller');

// data encapsulation. The user doesn't really need to see what's going on hihi
router.get('/store', StoreController.findAllStores);
router.get('/store/:store_id', StoreController.findStoreById);
router.post('/store', StoreController.addStore);
router.post('/store', StoreController.deleteStore);
router.post('/store/:store_id', StoreController.editStore);
module.exports = router;