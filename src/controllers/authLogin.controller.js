const authLoginService = require('../services/authLogin.service');

const authenticateLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }    
    
    const user = await authLoginService.findUserByEmail(email);

    if (!user || user.dataValues.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' }); 
      }

    const token = await authLoginService.authenticateLogin({ email, password });
    
    return res.status(200).json(token);
};

module.exports = { authenticateLogin };