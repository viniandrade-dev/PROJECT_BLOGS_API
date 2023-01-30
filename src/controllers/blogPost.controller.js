const blogPostService = require('../services/blogPost.service');

const createBlogPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;

    const newBlogPost = await blogPostService.createBlogPost({ title, content, categoryIds });

    return res.status(201).json(newBlogPost);
};

module.exports = {
    createBlogPost,
};