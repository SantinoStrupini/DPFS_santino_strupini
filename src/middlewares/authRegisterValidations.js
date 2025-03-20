const { body } = require('express-validator');



const authRegisterValidation = [
    body('userName').isLength({ min: 5 }).withMessage('The name must be at least 5 characters'),
    body('email').isEmail().withMessage('It must be a valid email'),
    body('password').isLength({ min: 8 }).withMessage('The password must be at least 8 characters')
];

module.exports = { authRegisterValidation };