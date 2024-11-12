const express = require('express');

const router = express.Router();

const productsController = require('../../controllers/api/productsApiController');



router.get('/category/:id', productsController.getById);   
router.get('/', productsController.getAll); 
router.post('/:id/deleteProduct', productsController.delete);
router.post('/:id/editProduct', productsController.edit);
router.post('/', productsController.create); 

module.exports = router;