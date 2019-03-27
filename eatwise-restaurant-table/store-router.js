const router = require('express').Router();
const StoreController = require('../store-controller');

router.get('/store', StoreController.findAllStores);
router.get('/store/:store_id', StoreController.findStoreById);
router.post('/store/:store_id', StoreController.deleteStore);