const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');



/* router.get('/category/:id', productsController.getById);  */ 
router.get('/productCart', productsController.productCart);
router.get('/', productsController.getAll); 
router.delete('/:id', productsController.delete);
router.post('/:id/editProduct', productsController.edit);
router.get('/:id/editProduct', productsController.showEditForm);
router.get('/createProduct', productsController.showCreateForm);
router.post('/', productsController.create); 

module.exports = router;