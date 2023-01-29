const Joi = require('joi');

const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const validateNewUser = async (req, res, next) => {
    const { displayName, email, password } = req.body;
    const { error } = userSchema.validate({ displayName, email, password });

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    next();
};

module.exports = {
    validateNewUser,
};