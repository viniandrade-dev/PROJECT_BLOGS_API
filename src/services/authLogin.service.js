const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const authenticateLogin = async ({ email, password }) => {
    if (!email || !password) throw new Error('Some required fields are missing');

    const user = await User.findOne({
        where: {
            email,
            password,
        },
    });

    if (!user) throw new Error('Invalid fields');

    const token = generateToken(user.dataValues);

    return { token };
};

const findUserByEmail = (email) => User.findOne({ where: { email } });

module.exports = {
    authenticateLogin,
    findUserByEmail,
};