module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {},
    {
        timestamps: false,
        underscored: true,
        tableName: 'posts_categories',
      });

      // PostCategory.associate = (models) => {
      //   models.BlogPost.hasMany(models.Category, {
      //       as: 'categories',
      //       through: PostCategory,
      //       foreignKey: 'post_id',
      //       otherKey: 'category_id',
      //   });

      //   models.Category.hasMany(models.BlogPost, {
      //       as: 'blog_posts',
      //       through: PostCategory,
      //       foreignKey: 'category_id',
      //       otherKey: 'post_id,'
      //   });
      // };

    return PostCategory;  
}