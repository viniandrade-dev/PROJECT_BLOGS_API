const express = require('express');
const authLoginController = require('../controllers/authLogin.controller');

const router = express.Router();

router.post('/', authLoginController.authenticateLogin);

module.exports = router;
