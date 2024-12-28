const jwt = require('jsonwebtoken');

function encode(payload) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }
    const token = jwt.sign(payload, secret);
    return token;
}


function generateToken(payload, options = {}) {
    const secret = process.env.JWT_SECRET; // Usa process.env
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }

    const defaultOptions = { expiresIn: '1h' };
    const finalOptions = { ...defaultOptions, ...options };

    return jwt.sign(payload, secret, finalOptions);
}

function verify(req) {
    if (req.headers && req.headers.authorization) {
        const parts = req.headers.authorization.split(' ');
        if (parts.length != 2) {
            throw new Error('Format is Authorization: Bearer [token]');
        }
        const [scheme, token] = parts;
        if (!/^Bearer$/i.test(scheme)) {
            throw new Error('Format is Authorization: Bearer [token]');
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET, (err) => {
            if (err) {
                throw new Error(err.message);
            }
        });
        return decoded;
    } else {
        throw new Error('token not found' );
    }
}

module.exports = {
    encode,
    generateToken,
    verify
};

