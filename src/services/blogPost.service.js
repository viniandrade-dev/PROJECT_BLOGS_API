const { Op } = require('sequelize');
const { BlogPost, PostCategory, User, Category } = require('../models');

const createBlogPost = async ({ title, content, userId, published, updated, categoryIds }) => {
    const newBlogPost = await BlogPost.create({ title, content, userId, published, updated });

    const { id: postId } = newBlogPost.dataValues;

    await Promise.all(categoryIds.map(async (categoryId) => {
        await PostCategory.create({ postId, categoryId });
    }));

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

const getBlogPostById = async (id) => {
    const blogPost = await BlogPost.findByPk(id, {
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    return blogPost;
};

const updateBlogPost = async (id, title, content) => {
   const [updatedBlogPost] = await BlogPost.update(
    { title, content },
    { where: { id } },
   );

   return updatedBlogPost;
};

const deleteBlogPost = async (id) => {
    const deletedBlogPost = await BlogPost.destroy({ where: { id } });

    return deletedBlogPost;
};

const getBlogPostByTerm = async (q) => {
    if (!q) {
        const blogPosts = await getAllBlogPosts();
        return blogPosts;
    }
    
    const blogPosts = await BlogPost.findAll({
        where: { [Op.or]: 
            [{ title: { [Op.substring]: q } }, { content: { [Op.substring]: q } }] },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
            { model: Category, as: 'categories', through: { attributes: [] } },
        ],
    });

    if (!blogPosts) {
        return [];
    }

    return blogPosts;
};

module.exports = {
    createBlogPost,
    getAllBlogPosts,
    getBlogPostById,
    updateBlogPost,
    deleteBlogPost,
    getBlogPostByTerm,
};