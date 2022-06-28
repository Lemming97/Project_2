const router = require('express').Router();

const User = require('../../models/User.js');
const Post = require('../../models/Post');
const Plant = require('../../models/Plant');
const Gallery = require('../../models/Gallery');
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const homeRoutes = require('./home-routes');

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
  

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/home', homeRoutes);

module.exports = router;