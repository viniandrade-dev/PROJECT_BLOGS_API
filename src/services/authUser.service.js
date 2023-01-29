const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const authenticateNewUser = async ({ displayName, email, password, image }) => {
    const newUser = await User.create({ displayName, email, password, image });

    const token = generateToken(newUser.dataValues);

    return { token };
};

const findUserByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
    authenticateNewUser,
    findUserByEmail,
};