const blogPostService = require('../services/blogPost.service');

const createBlogPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.headers.user;
    const newBlogPost = await blogPostService
    .createBlogPost({ title, content, userId, categoryIds });

    console.log(newBlogPost);

    return res.status(201).json(newBlogPost);
};

const getAllBlogPosts = async (_req, res) => {
    const blogPosts = await blogPostService.getAllBlogPosts();

    return res.status(200).json(blogPosts);
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
};