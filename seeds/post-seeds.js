const { Post } = require('../models')

const postData = [
    {
        title: "Roses are mid",
        post_description: "Roses are mid becuase the colors are boring",
        user_id: "1"
    },
    {
        title: "Roses are good",
        post_description: "Roses are good becuase the colors are great!",
        user_id: "1"
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;