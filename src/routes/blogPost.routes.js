const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');
const { authenticateTokenMiddleware } = require('../middlewares/tokenAuth');
const { validateNewBlogPost } = require('../middlewares/validateNewBlogPost');
const { validateUpdateBlogPost } = require('../middlewares/validateUpdateBlogPost');

const router = express.Router();

router.post('/', 
authenticateTokenMiddleware, validateNewBlogPost, blogPostController.createBlogPost);
router.get('/', authenticateTokenMiddleware, blogPostController.getAllBlogPosts);
router.get('/:id', authenticateTokenMiddleware, blogPostController.getBlogPostById);
router.put('/:id', 
authenticateTokenMiddleware, validateUpdateBlogPost, blogPostController.updateBlogPost);

module.exports = router;