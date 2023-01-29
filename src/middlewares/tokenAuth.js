const { authenticateToken } = require('../utils/jwt');

const authenticateTokenMiddleware = async (req, res, next) => {
    const token = req.header('Authorization');
  
    const user = authenticateToken(token);
    
    console.log(user);
    
    if (!user) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
    
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    next();
};

module.exports = {
    authenticateTokenMiddleware,
};