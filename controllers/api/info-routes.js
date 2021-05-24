const router = require("express").Router();
const {info} = require("../../models/"); //referencing the Info model

// home 
router.post("/", async (req, res) => {
    try {
        // best case scenario.  
        
        // information variables to display
        // const spouse1; 
        // const spouse2; 
        // const dateOfWedding; 
        // const venueName; 
        // const venueLocation; 


    } catch (err) {
        // if there is an error.
        res.status(500).json(err);  // displays the error in json format.
    }

});

// exporting 
module.exports = router; 