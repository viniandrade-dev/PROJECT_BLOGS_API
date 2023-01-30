const { BlogPost, PostCategory } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }) => {
    const newBlogPost = await BlogPost.create({ title, content });

    await PostCategory.create({ categoryIds });

    return newBlogPost;
};

module.exports = {
    createBlogPost,
};