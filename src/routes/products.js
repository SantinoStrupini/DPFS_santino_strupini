const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productsController');



/* router.get('/:id', productsController.getById);  */
router.get('/productCart', productsController.productCart);
router.get('/', productsController.getAll); 
router.delete('/', productsController.delete);
router.put('/', productsController.edit); 
router.get('/createProduct', productsController.showCreateForm);
router.post('/', productsController.create); 

module.exports = router;