const router = require('express').Router();
<<<<<<< HEAD
const { Gallery, plant, Plant } = require('../models');
=======
const {
    Gallery,
    Plant
} = require('../models');

>>>>>>> 7d2ece05c2ec555e83b069de7c5aeec436a34cfd
// Import the custom middleware
const withAuth = require('../utils/auth');



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
            }, ],
        });

        const gallery = dbGalleryData.get({
            plain: true
        });
        res.render('gallery', {
            gallery,
            loggedIn: req.session.loggedIn
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
            Plant,
            loggedIn: req.session.loggedIn
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