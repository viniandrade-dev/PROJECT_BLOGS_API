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

const getAllUsers = async (_req, res) => {
    const users = await authUserService.getAllUsers();
    
    return res.status(200).json(users);
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    const user = await authUserService.getUserById(id);

    if (!user) {
        return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
};

module.exports = {
    authenticateNewUser,
    getAllUsers,
    getUserById,
};