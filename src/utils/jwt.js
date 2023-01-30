require('dotenv/config');
const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
};

const generateToken = (payload) => jwt.sign(payload, TOKEN_SECRET, jwtConfig);

const authenticateToken = (token) => {
    if (!token) throw new Error('Missing token');

    try {
        const decryptedData = jwt.verify(token, TOKEN_SECRET);
        return decryptedData;
    } catch (error) {
        return null;
        // throw new Error({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    generateToken,
    authenticateToken,
};