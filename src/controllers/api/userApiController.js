const bcrypt = require('bcryptjs');
const jwt = require('../../helpers/jwt');
const db = require('../../database/models');

const userController = {
    
    register: async (req, res) => {
        const { userName, email, password } = req.body;

        try {
            
            const userExists = await db.User.findOne({ where: { email } });
            if (userExists) {
                return res.status(400).json({ message: 'The user already exists' });
            }

            
            const hashPassword = await bcrypt.hash(password, 10);
            const category = await db.Category.findOne({ where: { userName: 'user' } });
            const newUser = {
                userName,
                email,
                password: hashPassword,
                category_id: category?.id || null, 
            };
            const createdUser = await db.User.create(newUser);

            return res.status(201).json({ message: 'User created successfully', user: createdUser });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error creating user', error });
        }
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

            return res.status(200).json({ message: 'Login successful', token });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error logging in user', error });
        }
    },

    
    getAll: async (req, res) => {
        try {
            const users = await db.User.findAll({
                attributes: { exclude: ['password'] }, 
                include: ['category'], 
            });
            return res.status(200).json(users);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error retrieving users', error });
        }
    },


    getById: async (req, res) => {
        const { id } = req.params;

        try {
            const user = await db.User.findByPk(id, {
                attributes: { exclude: ['password'] },
                include: ['category'],
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            return res.status(200).json(user);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error retrieving user', error });
        }
    },
};

module.exports = userController;
