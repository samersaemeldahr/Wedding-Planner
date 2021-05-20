const router = require('express').Router();


// referencing the sibling files - the other routes 
const guestRoutes = require('./guest-routes.js');
const infoRoutes = require('./info-routes.js');
const questionsRoutes = require('./questions-routes.js');
const userRoutes = require('./user-routes.js');

// router use 
router.use('/user', userRoutes);


// exporting 
module.exports = router;