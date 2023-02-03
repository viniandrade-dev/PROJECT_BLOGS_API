const blogPostService = require('../services/blogPost.service');

const createBlogPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const { id: userId } = req.headers.user;
    const newBlogPost = await blogPostService
    .createBlogPost({ title, content, userId, categoryIds });

    return res.status(201).json(newBlogPost);
};

const getAllBlogPosts = async (_req, res) => {
    const blogPosts = await blogPostService.getAllBlogPosts();

    return res.status(200).json(blogPosts);
};

const getBlogPostById = async (req, res) => {
    const { id } = req.params;

    const blogPost = await blogPostService.getBlogPostById(id);

    if (!blogPost) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(blogPost);
};

const updateBlogPost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    await blogPostService.updateBlogPost(id, title, content);

    const updatedBlogPost = await blogPostService.getBlogPostById(id);

    return res.status(200).json(updatedBlogPost);
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    updateBlogPost,
};