const User = require('./User');
const Gallery = require('./Gallery');
const Plant = require('./Plant');
const Post = require('./Post')
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
});

Gallery.hasMany(Plant, {
  foreignKey: 'gallery_id',
});

Plant.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Gallery, Plant, Post, Comment };