const { Gallery } = require('../models');

const plantGalleryData = [
  {
    name: 'Spring Plants',
    starting_date: 'March 20, 2022',
    ending_date: 'June 21, 2021',
  },
  {
    name: 'Summer Plants',
    starting_date: 'June 21, 2022',
    ending_date: 'September 22, 2022',
  },
  {
    name: 'Fall Plants',
    starting_date: 'September 22, 2022',
    ending_date: 'December 21, 2022',
  },
  {
    name: 'Winter Plants',
    starting_date: 'December 21, 2022',
    ending_date: 'March 20, 2023',
  },
];

const seedGallery = () => plant_Gallery.bulkCreate(plantGalleryData);

module.exports = seedGallery;
