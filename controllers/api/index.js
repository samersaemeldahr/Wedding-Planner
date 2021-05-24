const router = require('express').Router();


// referencing the sibling files - the other routes 
const guestRoutes = require('./guest-routes.js');
const infoRoutes = require('./info-routes.js');
const questionsRoutes = require('./questions-routes.js');
const userRoutes = require('./user-routes.js');

// router use 

router.use("/user", userRoutes);
<<<<<<< HEAD
router.use("/guest", guestRoutes); 
router.use("info", infoRoutes); 
router.use("questions", questionsRoutes); 
=======
router.use("/guests", guestRoutes); 
router.use("/info", infoRoutes); 
router.use("/questions", questionsRoutes); 
>>>>>>> 9e4fd3cc2282994f2904a9b0eefdf3095f51fe37


// exporting 
module.exports = router;