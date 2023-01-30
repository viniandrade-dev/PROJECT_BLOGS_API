const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: '"name" is required' });
    }

    const newCategory = await categoryService.createCategory({ name });

    return res.status(201).json(newCategory);
};

const getAllCategories = async (req, res) => {
    const categories = await categoryService.getAllCategories();

    return res.status(200).json(categories);
};

module.exports = {
    createCategory,
    getAllCategories,
};