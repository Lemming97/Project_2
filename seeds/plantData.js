//plant images seed files 

const {
  Plant
} = require('../models');

const plantData = [{
    title: 'Clary Sage',
    common_name: 'Salvia Sclarea',
    bloom_time: 'Spring to summer',
    gallery_id: 1,
    features: 'The strongly aromatic leaves of Clary Sage are used in a variety of industries! Young leaves are used to flavor wines, beers and liqueurs. "Mascatel oil" is an important essential oil extract that is used to perfume soaps and cosmetics. At home, the large woolly leaves make a nice accent for brightly colored plants in borders or mixed container planting. The flowers may be used to brew tea, added to salads or used as a garnish on the dinner plate.',
    care_instructions: 'Feed annually with organic matter. Allow soil to dry between thorough waterings. Use light, well-drained soil. Does best in light, well-drained soil. Allow soil to dry between thorough waterings. Remove faded flowers.',
    filename: 'clary_sage.jpeg',
    description: 'Clary Sage - Salvia sclarea image',
  },
  {
    title: 'Cilantro',
    common_name: 'Coriandrum Sativum',
    bloom_time: 'Spring',
    gallery_id: 1,
    features: 'This herb produces a continual crop of piquant-flavored leaves for one season. This selection is slow to bolt. Bolting is when the central stalk of a plant grows quickly upward and produces flowers, which turns the flavor bitter. As a result, slow to bolt is a desirable feature in Cilantro. Use the tender leaves to add a citrus-like taste to salsa, salads or guacamole.',
    care_instructions: 'Plant feed is not necessary. Allow soil to dry between thorough waterings. Use light, well-drained soil. Does best in light, well-drained soil. Allow soil to dry between thorough waterings. Harvest foliage as needed. Harvest seeds when they turn brown.',
    filename: 'cilantro.jpeg',
    description: 'up close photo of cilantro in a pot',
  }
];

const seedPlants = () => Plant.bulkCreate(plantData);

module.exports = seedPlants;