const { BlogPost, PostCategory, User, Category } = require('../models');

const createBlogPost = async ({ title, content, userId, published, updated, categoryIds }) => {
    const newBlogPost = await BlogPost.create({ title, content, userId, published, updated });

    const { id: postId } = newBlogPost.dataValues;

    categoryIds.forEach(async (categoryId) => { 
        await PostCategory.create({ postId, categoryId });
    });

    return newBlogPost;
};

const getAllBlogPosts = async () => {
    const blogPosts = await BlogPost.findAll({
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return blogPosts;
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
};