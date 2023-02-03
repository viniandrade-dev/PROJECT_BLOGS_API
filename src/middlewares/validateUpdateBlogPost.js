const { getBlogPostById } = require('../services/blogPost.service');

const validateUpdateBlogPost = async (req, res, next) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const { id: userId } = req.headers.user;
    const { dataValues: blogPost } = await getBlogPostById(id);

    if (userId !== blogPost.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }

    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
};

module.exports = {
    validateUpdateBlogPost,
};