const bcrypt = require('bcryptjs');
const jwt = require('../helpers/jwt');
const db = require('../database/models');

const userController = {
    showRegisterForm: (req, res) => {
        
        res.render('user/register'); 
    },
    register: async (req, res) => {
        const { userName, email, password } = req.body;
        const category = await db.Category.findOne({where: { userName: 'user'}})
        try {
            const userExists = await User.findOne({ where: { email } });
            if (userExists) {
               
                return res.status(400).json({ message: 'The user already exists' });
            }
            const hashPassword = await bcrypt.hash(password, 10);
            const newUser = { 
                userName, 
                email, 
                password: hashPassword, 
                category_id: category.id
            };
            await db.User.create(newUser);
           
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
            const userExists = await db.User.findOne({ where: { email } });
            if (!userExists) {
                
                return res.status(404).json({ message: 'User not found' });
            }
            const isValidPassword = await bcrypt.compare(password, userExists.password);
            if (!isValidPassword) {
                
                return res.status(401).json({ message: 'Incorrect password or email' });
            }
            
            
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
    },
    getAll: async(req, res) =>{
        try {
            const users = await db.User.findAll({
                attributes: {
                    exclude: ['password', 'categories_id']
                },
                include: ['category']

            });
            return res.json(users)
        } catch (error) {
            return res.status(500).send(error)
        }
        
    },
    getById: async(req, res) => {
        try {
            const { id } = req.params;
            const user = await db.User.findByPk(id, {
                attributes: {
                    exclude: ['password', 'categories_id']
                },
                include: ['category']
            });
            return res.json(user);
        } catch (error) {
            return res.status(500).send(error);
        }
    }
};

module.exports = userController;
