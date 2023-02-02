const { getCategoriesByIds } = require('../services/categoryService');

const validateNewBlogPost = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    // const { error } = blogPostSchema.validate({ title, content, categoryIds });

    if (!title || !content || !categoryIds) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const categories = await getCategoriesByIds(categoryIds);

    console.log(categories);

   if (categories.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
   }

    next();
};

module.exports = {
    validateNewBlogPost,
};