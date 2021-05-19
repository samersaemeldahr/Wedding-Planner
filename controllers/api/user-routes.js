const router = require("express").Router();
const User = require("../../models/User.js"); //referencing the user model


/*  --  Main  --  */

router.post("/", async(req, res) => {
    // best case scenario
    try {
        const userSignUp = await User.create({
                // what we are creating in the User Model 
            username: req.body.username, 
            password: req.body.password, 
        }); 

        req.session.save(() => {
            req.session.userID = userSignUp.id; // communicates with the id of the user.init in the models
            req.session.username = userSignUp/username; 
            req.session.loggedIn = true; // boolean to keep them logged in

            res.json(userSignUp); // outputs what the variable state is as a json 
        });

    // in case something goes wrong :( 
    } catch (err) {
        res.status(500).json(err);
    }

}); 


/*  --  Logging In  --  */



/*  --  Logging Out  --  */

router.post("/logout", (req, res) => {

    if (req.session.loggedIn) { 
        // if true 
        req.session.destroy(() => {
            res.status(204).end(); // No Content | the request has succeeded, but the client does not need to navigate away
        });

    } else {
        res.status(404).end(); // Dead link | Page is missing
    }

});


/*  --  Export Information  --  */
module.exports = router; 











