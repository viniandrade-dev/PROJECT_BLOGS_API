const authUserService = require('../services/authUser.service');

const authenticateNewUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const user = await authUserService.findUserByEmail(email);

    if (!user) {
        const token = await authUserService
    .authenticateNewUser({ displayName, email, password, image });

    return res.status(201).json(token);
    }

    if (email === user.dataValues.email) {
        return res.status(409).json({ message: 'User already registered' });
    }
};

module.exports = {
    authenticateNewUser,
};