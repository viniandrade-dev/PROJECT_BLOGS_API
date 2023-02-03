const { getBlogPostById } = require('../services/blogPost.service');

const validateDeleteBlogPost = async (req, res, next) => {
    const { id } = req.params;
    const { id: userId } = req.headers.user;
    const blogPost = await getBlogPostById(id);

    if (!blogPost) {
        return res.status(404).json({ message: 'Post does not exist' });
    }

    if (userId !== blogPost.dataValues.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }

    next();
};

module.exports = {
    validateDeleteBlogPost,
};