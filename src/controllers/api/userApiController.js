const bcrypt = require('bcryptjs');
const jwt = require('../../helpers/jwt');
const User = require('../../models/user');


const userApiController = {
    register : async (req, res) => {
        const { userName, email, password, category } = req.body;
        try {
            const userExists = await User.findByEmail(email);
            if (userExists) {
                return res.status(400).json({ message: 'The user exists' });
            }
            const hashPassword = await bcrypt.hash(password, 10);
            const newUser = { userName, email, password: hashPassword, category };
            await User.create(newUser);
            res.status(201).json({ message: 'Usuario creado correctamente' });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear usuario', error });
        }
    },
    
    
    login : async (req, res) => {
        const { email, password } = req.body;
        try {
            const userExists = await User.findByEmail(email);
            if (!userExists) {
                return res.status(404).json({ message: 'The user doesn\'t exist' });
            }
            const isValidPassword = await bcrypt.compare(password, userExists.password);
            if (!isValidPassword) {
                return res.status(401).json({ message: 'Incorrect password' });
            }
            const token = jwt.encode(
                { name: userExists.userName, email: userExists.email },
                process.env.JWT_SECRET, // Corregido
                { expiresIn: '1h' }
            );
            res.json({ token, message: 'Logged in successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error al logear usuario', error });
        }
    }
    
};

module.exports = userApiController;
