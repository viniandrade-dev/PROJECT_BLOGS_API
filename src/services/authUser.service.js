const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const authenticateNewUser = async ({ displayName, email, password, image }) => {
    const newUser = await User.create({ displayName, email, password, image });

    const token = generateToken(newUser.dataValues);

    return { token };
};

const findUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    return users;
};

const getUserById = async (id) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

    return user;
};

module.exports = {
    authenticateNewUser,
    findUserByEmail,
    getAllUsers,
    getUserById,
};