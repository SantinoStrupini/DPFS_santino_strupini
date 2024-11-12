const bcrypt = require('bcryptjs');
const jwt = require('../helpers/jwt');
const User = require('../models/user');

const userController = {
    showRegisterForm: (req, res) => {
        
        res.render('user/register'); 
    },
    register: async (req, res) => {
        const { userName, email, password, category } = req.body;
        try {
            const userExists = await User.findByEmail(email);
            if (userExists) {
               
                return res.status(400).json({ message: 'The user already exists' });
            }
            const hashPassword = await bcrypt.hash(password, 10);
            const newUser = { userName, email, password: hashPassword, category };
            await User.create(newUser);
           
            res.redirect('/');
        } catch (error) {
            console.error(error);
            
            res.status(500).json({ message: 'Error creating user', error });
        }
    },
    showLoginForm: (req, res) => {
        
        res.render('user/login'); 
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const userExists = await User.findByEmail(email);
            if (!userExists) {
                
                return res.status(404).json({ message: 'User not found' });
            }
            const isValidPassword = await bcrypt.compare(password, userExists.password);
            if (!isValidPassword) {
                
                return res.status(401).json({ message: 'Incorrect password' });
            }
            console.log("JWT Secret:", process.env.JWT_SECRET);
            
            const token = jwt.encode(
                { name: userExists.userName, email: userExists.email },
                process.env.JWT_SECRET
                
            );
            res.cookie('authToken', token, { maxAge: 1000 * 60 * 60 * 24 * 7  }); 

           
            res.redirect('/');
        } catch (error) {
            console.error(error);
            
            res.status(500).json({ message: 'Error logging in user', error });
        }
    }
};

module.exports = userController;
