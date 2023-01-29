const express = require('express');
const authUserController = require('../controllers/authUser.controller');
const { validateNewUser } = require('../middlewares/validateNewUser');

const router = express.Router();

router.post('/', validateNewUser, authUserController.authenticateNewUser);

module.exports = router;