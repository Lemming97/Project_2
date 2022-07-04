const { Post } = require('../models')

const postData = [
    {
        title: "How to Water Your Indoor Plants The Right Way",
        post_description: "Watering from below is best. Although watering from above is still the usual way people water their plants, watering from underneath is more homogeneous, less prone to overwatering and there is no concern of draining nutrients out. Plus, you can be sure that the water does actually get to the roots. Know your plants water preferences. Again, there are 2 types of houseplants: the Dry type and the Moist type. Members of the dry type are cacti, succulents (such as Aloe Vera or Echeveria for the most famous) and several others species (Zeezee plant, Snake plant, Dumb Cane, Rubber plant, etc.). They enjoy dry soil so no need to water them as much as the others. Watering once or twice a month can be enough, depending on the temperature of the room. I repeat this advice throughout the blog because overwatering is one of the main causes for houseplants to die. The Moist type: once the soil gets dry, they like to be watered in the next days. Most tropical plants behave like this. The Dry type: they can thrive on dry soil during longer periods. Theyre easier to care for and perfect for beginners.",
        short_description: "Find out watering tips that your indoor plants will thank you for!",
        image: "invincible_house_plants_how_to_water_indoor_plants.jpg",
        user_id: "1"
    },
    {
        title: "Mistakes People Make With Indoor Plants",
        post_description: "Ironically, the most frequent cause of houseplant not surviving is overwatering. People mistakenly think all plants need to be watered the same way. That's not true. Cacti and succulents prefer dry soil. Cacti can survive for months without water. Most succulents thrive with as little as a monthly watering, whereas a weekly watering will kill them. This happened to you? I killed my second plant - which was a succulent - by watering it as much as the other one - which as a tropical specimen. The ability to store water varies dramatically across species and therefore water needs are different. Light is essential, but as always with plants, more is often too much. Bright direct sunlight is to be avoided for most species, except cacti and some succulents which have a higher tolerance to direct sunlight. The reason is that direct sunlight is too harsh. For most species, indirect sunlight is best because it's softer. In the UK a spot near a north facing window does a great job. Bright sunlight reflected on a wall or diffused through a veil gives perfect bright indirect light. You can have some plants in the bathroom even with low light conditions. Some species just don’t need as much light!",
        short_description: "What mistakes could you be making that are stunting your plant's growth?",
        image: "house_plants_overwatering_dumb_cane_dieffenbachia.jpg",
        user_id: "2"
    },
    {
        title: "Plants Suitable for the Home Office",
        post_description: "If looking after plants isn’t your forte, the Swiss cheese plant is one for you. The Independent explains there’s a good chance you will be able to keep this plant alive, no matter how busy or forgetful you are. It only needs watering every two weeks or so, and they can live happily in pots or hanging planters. They're growing fast, too, so you need to make sure that you use a pot or planter with plenty of space. They’re also known to have good air cleaning properties. Epipremnum aureum is a type of evergreen vine with large heart-shaped leaves that come in a wide variety of light and dark colours. What’s great about it is how it can quickly adapt to a variety of office conditions, whether you have low light or are fortunate to have a bright working space. They’re very easy to care for as they’re resistant to insect infestations and they never lose their colour no matter how long you deprive them of light. If you’re looking to add a little pop of colour to your home office desk, Devil’s Ivy is your best choice. The plant was even recommended in NASA’s Clean Air Study because of its air-purifying attributes. They thrive in evenly moist soil, but not drenched.",
        short_description: "Need to brighten up the home office? Here's some plants we recommend!",
        image: "common_house_plants_resilient_hardy_easy_care.jpg",
        user_id: "3"
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;