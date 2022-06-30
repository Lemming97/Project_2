const router = require('express').Router();
const {
    Gallery,
    Plant,
    User
} = require('../models');
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
            }, ],
        });

        const galleries = dbGalleryData.map((gallery) =>
            gallery.get({
                plain: true
            })
        );
    
        res.render('homepage', {
            galleries,
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
            }],
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

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;