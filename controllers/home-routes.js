const router = require('express').Router();
const { Gallery, Plant, Post, User, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');
const dayjs = require('dayjs');

const formatDate = () => {
    const rightNow = new Date();
    // currentDay = dayjs(rightNow).format('MMMM D YYYY');
    return dayjs(rightNow).format('MMMM D YYYY');
}




// GET all galleries for homepage
router.get('/', async (req, res) => {
    try {
        const dbGalleryData = await Gallery.findAll({
            include: [{
                model: Plant,
                attributes: ['filename', 'description'],
            },],
        });

        const galleries = dbGalleryData.map((gallery) =>
            gallery.get({
                plain: true
            })
        );


        const dbPostsData = await Post.findAll({
            include: [{
                model: User,
                attributes: ['username'],
            }]
        });

        const posts = dbPostsData.map((post) =>
            post.get({
                plain: true
            })
        );

        res.render('homepage', {
            galleries,
            posts,
            loggedIn: req.session.loggedIn,
            currentDay: formatDate()
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// GET one plant gallery
// Use the custom middleware before allowing the user to access the gallery
router.get('/gallery/:id', withAuth, async (req, res) => {
    try {
        const dbGalleryData = await Gallery.findByPk(req.params.id, {
            include: [{
                model: Plant,
                attributes: [
                    'id',
                    'title',
                    'family_name',
                    'bloom_time',
                    'features',
                    'care_instructions',
                    'filename',
                    'description',
                ],
            },],
        });

        const gallery = dbGalleryData.get({
            plain: true
        });
        res.render('plantGallery', {
            gallery,
            loggedIn: req.session.loggedIn,
            currentDay: formatDate()
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// GET one plant
// Use the custom middleware before allowing the user to access the plant
router.get('/plant/:id', withAuth, async (req, res) => {
    try {
        const dbPlantData = await Plant.findByPk(req.params.id);

        const plant = dbPlantData.get({
            plain: true
        });

        res.render('plant', {
            plant,
            loggedIn: req.session.loggedIn,
            currentDay: formatDate()

        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// LOGIN page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

// POSTS page
router.get('/post/:id', withAuth, async (req, res) => {

    try {
        const dbPostdata = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: Comment,
                    attributes: [
                        'id',
                        'comment_text',
                        'user_id',
                    ],
                    include: {
                        model: User,
                        attributes: ['username']
                    }
                },
                {
                    model: User,
                    attributes: [
                        'username'
                    ]
                }
            ]
        });

        const post = dbPostdata.get({
            plain: true
        });

        res.render('single-post', { post, loggedIn: req.session.loggedIn });
      
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//BLOG page
router.get('/posts', async (req, res) => {
    try {

        const dbPostsData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                }
            ]
        });

        const posts = dbPostsData.map((post) =>
            post.get({
                plain: true
            })
        );

        res.render('blogs', {
            posts,
            loggedIn: req.session.loggedIn,
            currentDay: formatDate()
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
  try {
    const dbCommentData = await Comment.findByPk(req.params.id, {
      include: {
        model: User,
        attributes: ['username']
      }
    });

    res.json(dbCommentData);
    const comment = dbCommentData.get({
      plain: true
    });
    res.render('edit-comments', { comment, loggedIn: req.session.loggedIn });
    console.log(loggedIn);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/comments', async (req, res) => {
//   try {

//     const dbCommentsData = await Comment.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username'],
//         }
//       ]
//     });

//     const comments = dbCommentsData.map((comment) =>
//       comment.get({
//         plain: true
//       })
//     );
//     res.render('edit-comments', {
//       comments,
//       loggedIn: req.session.loggedIn,
//       currentDay: formatDate()
//     });
//     res.json(dbCommentsData);

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });





module.exports = router;