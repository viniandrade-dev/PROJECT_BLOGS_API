const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');
const { authenticateTokenMiddleware } = require('../middlewares/tokenAuth');

const router = express.Router();

router.post('/', authenticateTokenMiddleware, blogPostController.createBlogPost);
router.get('/', authenticateTokenMiddleware, blogPostController.getAllBlogPosts);

module.exports = router;