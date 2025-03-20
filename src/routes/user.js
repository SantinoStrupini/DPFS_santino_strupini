const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');
const { authLoginValidation } = require('../middlewares/authLoginValidations');
const { authRegisterValidation } = require('../middlewares/authRegisterValidations');

router.get('/register', userController.showRegisterForm);
router.post('/register', authRegisterValidation ,userController.register)
router.get('/login',  userController.showLoginForm);
router.post('/login', authLoginValidation ,userController.login);
router.get('/', userController.getAll);
router.get('/:id', userController.getById)


module.exports = router;