const { body } = require('express-validator');

const authLoginValidation = [
    body('password').isLength({ min: 8 }).withMessage('The password must be at least 8 characters'), 
]


module.exports = { authLoginValidation };