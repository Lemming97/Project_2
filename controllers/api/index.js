const router = require('express').Router();

const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);// this is linking to the user-routes.js file 

module.exports = router;