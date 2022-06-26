const seedUsers = require('./user-seeds');
const seedComments = require('./comment-seeds');
const seedPlants = require('./plantData');
const seedGallery = require('./plantGalleryData');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({
    force: true
  });
  console.log('--------------');

  await seedUsers();
  console.log('Users');

  await seedGallery();
  console.log('gallery');

  await seedPlants();
  console.log('plants');

  await seedComments();
  console.log('comment');


  process.exit(0);
};

seedAll();