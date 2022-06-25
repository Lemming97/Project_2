//plant images seed files 

const { Plant } = require('../models');

const Plantdata = [
  {
    title: 'Blossoming Apricot',
    artist: 'LedyX',
    exhibition_date: 'March 30, 2018',
    gallery_id: 1,
    filename: '01-blossoming-apricot.jpg',
    description:
      'Branches with pink apricot blossoms against a blue background.',
  },
  {
    title: 'Cosmos Flowers',
    artist: 'WStudio',
    exhibition_date: 'May 05, 2017',
    gallery_id: 1,
    filename: '02-cosmos-flowers.jpg',
    description: 'Pink cosmos flowers against a blue sky.',
  }
];

const seedPlants = () => Plant.bulkCreate(Plantdata); 

module.exports = seedPlants;
