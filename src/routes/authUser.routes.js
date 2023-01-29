const express = require('express');
const authUserController = require('../controllers/authUser.controller');
const { validateNewUser } = require('../middlewares/validateNewUser');
const { authenticateTokenMiddleware } = require('../middlewares/tokenAuth');

const router = express.Router();

router.post('/', validateNewUser, authUserController.authenticateNewUser);
router.get('/', authenticateTokenMiddleware, authUserController.getAllUsers);
router.get('/:id', authenticateTokenMiddleware, authUserController.getUserById);

module.exports = router;