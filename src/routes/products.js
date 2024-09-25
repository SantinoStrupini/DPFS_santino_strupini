const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');


router.get('/productDetail', productsController.index);
router.get('/guitarsDetail', productsController.guitarsDetail);
router.get('/drumsDetail', productsController.drumsDetail);
router.get('/bassDetail', productsController.bassDetail);
router.get('/productCart', productsController.productCart);

module.exports = router;