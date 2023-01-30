const { Category } = require('../models');

const createCategory = async ({ name }) => {
    const newCategory = await Category.create({ name });

    return newCategory.dataValues;
};

const getAllCategories = async () => {
    const categories = await Category.findAll();

    return categories;
};

module.exports = {
    createCategory,
    getAllCategories,
};