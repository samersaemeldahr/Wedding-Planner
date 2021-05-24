const router = require("express").Router();
<<<<<<< HEAD
const {info} = require("../../models/"); //referencing the Info model

// home 
router.post("/", async (req, res) => {
    try {
        // best case scenario.  
        
        // information variables to display
        const spouse1; 
        const spouse2; 
        const dateOfWedding; 
        const venueName; 
        const venueLocation; 


    } catch (err) {
        // if there is an error.
        res.status(500).json(err);  // displays the error in json format.
    }

=======
const Info = require("../../models/Info"); //referencing the Info model

router.post('/', /* withAuth, */ async (req, res) => {
    try {
        const info = await Info.create({
            greeting: req.body.greeting,
            catering: req.body.catering,
            photographer: req.body.photographer,
            dj: req.body.dj,
            kids: req.body.kids,
            userId: req.session.userId
        });
        res.json(info);
    } catch (err) {
        res.status(500).json(err);
    }
>>>>>>> 9e4fd3cc2282994f2904a9b0eefdf3095f51fe37
});

// exporting 
module.exports = router; 