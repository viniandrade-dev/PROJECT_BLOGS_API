const express = require('express');
const blogPostController = require('../controllers/blogPost.controller');

const router = express.Router();

router.post('/', blogPostController.createBlogPost);

module.exports = router;