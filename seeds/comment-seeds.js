const { Comment } = require('../models');

const commentData = [
    {
      comment_text: 'Awesome tips...!',
      user_id: 4,
      post_id: 1
    },
    {
      comment_text: 'It is nice info altogether. Thanks',
      user_id: 1,
      post_id: 1
    },
    {
      comment_text: 'Thank you. Great advice explained in a clear and simple way, no waffling on and on. I will now have a lot more happier plants!',
      user_id: 2,
      post_id: 2
    },
    {
      comment_text: 'Benefits of having good quality indoor plants helps in air purification which has many benefits for us like, Increased positive feelings and reduced feelings of anxiety, anger and sadness. Reduction of sound levels. Reduction of stress levels. Control of humidity to the within the optimum levels for human health.',
      user_id: 3,
      post_id: 3
    },
    {
      comment_text: 'Thanks so much!',
      user_id: 2,
      post_id: 2
    },
    {
      comment_text: 'Thanks for sharing Amazing information!!',
      user_id: 4,
      post_id: 3
    },
    {
      comment_text: 'This is a great article! I have been struggling with my Ficus elastica lately, I have had her for 10 years and have recently run into poorly drained soil and spidermites which caused a lot of leaf loss. I changed her soil and pot recently so it is better drained, and put her into a self watering pot. Do you think the Ficus will do okay in a self watering pot?',
      user_id: 3,
      post_id: 2
    },
    {
      comment_text: 'Are there any plants you have found that the self watering method does not work? Either with over or under watering? If it keeps the soil consistently moist, then I would assume it wouldn’t work well for cacti and succulents, and if a plant requires very moist soil all the time would the soil be able to retain enough water with self watering?',
      user_id: 4,
      post_id: 1
    },
    {
      comment_text: 'When I get the idea of urban jungle I started to create it on my own in my flat. I was looking for plants in many places due to the fact that I did not want to spend much money for them. That is how I got monstera and howea forsteriana. I have also other plants that you did not mentioned here like for example zamioculcas which perfectly fit into the urban jungle idea. What I also found on another blogs was to use various herbs because they are also deciduous and do not stray from the urban jungle concept. As I love basil I ordered this variety of basil seeds from https://gardenseedsmarket.com/home-garden-basil-variety-mix-for-indoor-and-balcony-cultivation-great-basil-saint-joseph-s-wort.html and planted them into a pretty small pot. You can also use other herbs but I found this idea amazing. Try it!',
      user_id: 1,
      post_id: 3
    },
    {
      comment_text: 'I am a plant lover and have about 60 indoor plants which include a small cactus collection. I still learned lot from your comments. I was hearing some plant growers that moving plants around was good. I was not sure that was the best advice and thanks to you I am now sure. Will keep my indoor friends still when possible. Thank you so much.',
      user_id: 2,
      post_id: 2
    }
  ];
  
  const seedComments = () => Comment.bulkCreate(commentData);
  
  module.exports = seedComments;
  