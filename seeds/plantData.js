//plant images seed files 

const {
  Plant
} = require('../models');

const plantData = [
 {
    title: 'Clary Sage',
    family_name: 'Salvia Sclarea',
    bloom_time: 'Spring to summer',
    gallery_id: 1,
    features: 'The strongly aromatic leaves of Clary Sage are used in a variety of industries! Young leaves are used to flavor wines, beers and liqueurs. "Mascatel oil" is an important essential oil extract that is used to perfume soaps and cosmetics. At home, the large woolly leaves make a nice accent for brightly colored plants in borders or mixed container planting. The flowers may be used to brew tea, added to salads or used as a garnish on the dinner plate.',
    care_instructions: 'Feed annually with organic matter. Allow soil to dry between thorough waterings. Use light, well-drained soil. Does best in light, well-drained soil. Allow soil to dry between thorough waterings. Remove faded flowers.',
    filename: 'clary_sage.jpeg',
    description: 'Clary Sage - Salvia sclarea image',
  },
  {
    title: 'Cilantro',
    family_name: 'Coriandrum Sativum',
    bloom_time: 'Spring',
    gallery_id: 1,
    features: 'This herb produces a continual crop of piquant-flavored leaves for one season. This selection is slow to bolt. Bolting is when the central stalk of a plant grows quickly upward and produces flowers, which turns the flavor bitter. As a result, slow to bolt is a desirable feature in Cilantro. Use the tender leaves to add a citrus-like taste to salsa, salads or guacamole.',
    care_instructions: 'Plant feed is not necessary. Allow soil to dry between thorough waterings. Use light, well-drained soil. Does best in light, well-drained soil. Allow soil to dry between thorough waterings. Harvest foliage as needed. Harvest seeds when they turn brown.',
    filename: 'cilantro.jpeg',
    description: 'up close photo of cilantro in a pot',
  },
  {
    title: 'Ginger',
    family_name: 'Alpinia species',
    bloom_time: 'Summer',
    gallery_id: 2,
    features: 'Alipinia provide broad, attractive foliage and under the best conditions will develop interesting bloom clusters as well. The leaves may be variegated, depending on variety,and blooms from pale to bright. Best in part shade outdoors and bright light indoors. Plant with other tropical for a lush, jungle effect.',
    care_instructions: 'Feed monthly. Keep soil evenly moist. Fertile, humus-rich soil. Grow in fertile, humus-rich soil. Keep soil moist, watering freely in dry weather. ',
    filename: 'ginger.jpeg',
    description: 'up close photo of ginger with leaves in the background',
  },
  {
    title: 'Creeping Lemon Thyme',
    family_name: 'Thymus serpyllum',
    bloom_time: 'Summer',
    gallery_id: 2,
    features: 'Creeping Lemon Thyme forms a tight mat of evergreen foliage that emits a delightful lemony scent! The plant will withstand heavy foot traffic, and makes an excellent groundcover. It also looks nice spilling over container edges. The leaves may be used fresh or dried to add flavor to meat dishes, marinades, vinegars and stuffing. Dried leaves are nice for adding to homemade potpourri. The flowers are an important nectar source for honeybees!',
    care_instructions: 'Plant feed is not necessary. Allow soil to dry between thorough waterings. Use light, well-drained soil. Tolerates poor soil, heat, and drought. Does best in light, well-drained soil. Allow soil to dry between thorough waterings. Trim back lightly after flowering.',
    filename: 'creeping-lemon-thyme.png',
    description: 'up close photo of creeping lemon thyme plant',
  },
  {
    title: 'Lemon Grass ',
    family_name: 'Cymbopogon citratus',
    bloom_time: 'Late summer to autumn',
    gallery_id: 3,
    features: 'A frost-tender clumping perennial grass that is popular for use in Southeast Asian cuisine. The gracefully arching leaves emit a lemony scent when crushed or bruised. The base of the leaf (or leaf stalk) can be used to add a zesty lemon flavor to a variety of fish and meat dishes, curries and sauces. This ornamental selection is very nice for planting in beds and herb gardens, or potting up in containers and placing around decks and patios.',
    care_instructions: 'Feed once every month during growing season. Keep soil evenly moist. Fertile, well-drained soil. Best in fertile, well-drained soil. Water as needed to keep soil evenly moist, especially in hot weather. Harvest the tightly rolled new leaves inside the base of a single sprout for culinary use.',
    filename: 'lemon-grass.png',
    description: 'lemon grass in a field',
  },
  {
    title: 'Oregano',
    family_name: 'Origanum vulgare',
    bloom_time: 'Midsummer to autumn',
    gallery_id: 3,
    features: 'Valued in the kitchen for its peppery flavored, aromatic foliage. This bushy perennial herb forms upright to spreading mounds. Masses of small pink flowers in midsummer.',
    care_instructions: 'Plant feed is not necessary. Allow soil to dry between thorough waterings. Use light, well-drained soil. Tolerates poor soil, heat, and drought. Does best in light, well-drained soil. Allow soil to dry between thorough waterings. Protect from excessive winter moisture.',
    filename: 'oregano.png',
    description: 'four pots of oregano sitting in a straight line',
  },
  {
    title: 'German Ivy, Cape Ivy',
    family_name: 'Senecio mikanioides',
    bloom_time: 'Autumn and winter',
    gallery_id: 4,
    features: 'An evergreen climber in its native South Africa, German Ivy is popular as an annual vine and houseplant. The lush, glossy foliage is similar in appearance to English Ivy and works well as a filler in annual combinations, or solo trailing from a hanging basket. Provide bright light and good air circulation if overwintering indoors.',
    care_instructions: 'Apply a balanced liquid fertilizer monthly. Keep soil evenly moist. Use fertile, well-drained soil. Best in fertile, well-drained soil. Keep soil moist, watering freely in dry weather. Apply a balanced liquid fertilizer monthly. Trim back as needed to keep neat and compact.',
    filename: 'german-ivy.png',
    description: 'white pot of german ivy sitting on a desk',
  },
  {
    title: 'Dendrobium Orchid',
    family_name: 'Dendrobium nobile',
    bloom_time: 'Winter to spring',
    gallery_id: 4,
    features: 'One of the easiest orchids to grow! Dendrobium orchids produce showy sprays of long-lasting flowers. Available in an array of beautiful colors; these are the orchid blooms most often used for creating traditional Hawaiian leis. Orchids can be grown outdoors in warmer months and brought indoors for the winter.',
    care_instructions: 'Fertilize regularly for best display. Allow soil to dry between thorough waterings. Orchid bark mix. Keep away from drafts. Allow soil to dry between thorough waterings. Repot every two years in the same container or in a container slightly larger than the diameter of the roots.',
    filename: 'orchid.png',
    description: 'close up of orchid plant with bits of pink and red in it',
  }
];

const seedPlants = () => Plant.bulkCreate(plantData);

module.exports = seedPlants;