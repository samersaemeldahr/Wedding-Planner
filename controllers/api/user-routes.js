const router = require("express").Router();

const { User } = require("../../models/"); //referencing the user model


/*  --  Main  --  */

router.post("/", async (req, res) => {
    // best case scenario
    try {
        const newUser = await User.create({
                // what we are creating in the User Model 
            username: req.body.username, 
            password: req.body.password, 
            // userId: req.session.userId
        }); 

        req.session.save(() => {
            req.session.userId = newUser.id; // communicates with the id of the user.init in the models
            req.session.username = newUser.username; 
            req.session.loggedIn = true; // boolean to keep them logged in

            res.json(newUser); // outputs what the variable state is as a json 
        });

    // in case something goes wrong :( 
    } catch (err) {
        res.status(500).json(err);
    }

}); 


/*  --  Logging In  --  */

router.post("/login", async (req, res) => {

    // Best case scenario 
    try {
        // when the person tries logging in. The typical login page. 
        
        const user = await User.findOne({
            where: {
                username: req.body.username,
            },
        }); 
 
        const isPasswordValid = user.checkPassword(req.body.password);

        /* if user infomation is missing */

        if (!user) { 
            // If the username is missing
            res.status(400).json({ message: "Username was not found." });
            return; 
        }

        if (!isPasswordValid) {
            // If the password is missing
            res.status(400).json({ message: "Password not found."});
            return;
        }

        req.session.save(() => {
            req.session.userId = user.id; 
            req.session.username = user.username;
            req.session.loggedIn = true; 

            res.json({
                user, 
                message: "welcome! You are signed in now." });
        });

    } catch (err) {
        res.status(400).json({ message: "User account has not been found. Sign up today! "});
    }

});


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











