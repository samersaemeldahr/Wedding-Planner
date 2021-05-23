const router = require("express").Router();
// const { Guest, Questions, Info } = require("../models");
const withAuth = require('../utils/auth');
const Questions = require("../models/Questions");
const Guest = require("../models/Guest");

// Login route
router.get("/", async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.redirect("home");
            return
        } else {
            res.render("login")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

// Home route
router.get('/home', async (req, res) => {
    const guestsData = await Guest.findAll({
        where: {
            userId: req.session.userId
        }
    }).catch((err) => {
        res.json(err);
    });
    
    const questionsData = await Questions.findAll({
        where: {
            userId: req.session.userId
        }
    }).catch((err) => {
        res.json(err);
    });
    console.log(questionsData)
    const guests = guestsData.map((guest) => guest.get({ plain: true }));
    const questions = questionsData.map((question) => question.get({ plain: true}))[0]
    // const questions = questionsData.map((quest) => quest.get({ plain: true }));
    res.render('home', { questions, guests });
});

// router.get("/home", async (req, res) => {
//     try {
//         // const homeData = await Questions.findAll();
//         // // const guestData = await Guest.findAll();
//         // // const infoData = await Info.findAll();
//         const questionsData = await Questions.findAll({
//             firstName: req.params.firstName,
//             spouseName: req.params.spouseName,
//             weddingDate: req.params.weddingDate,
//             venueName: req.params.venueName
//           })
//         // // we might need to map all the data
//         // // const allModels = { homeData, guestData, infoData };

//         const data = questionsData.map((dataInfo) => dataInfo.get({ plain: true }));

//         res.render("home", {data})
//     } catch (err) {
//         res.status(500).json(err)
//     }
// })

// Dashboard route
router.get('/dashboard', async (req, res) => {
    try {
        const questionsData = await Questions.findAll({
            where: {
                userId: req.session.userId,
            },
        });

        const questions = questionsData.map((question) => question.get({ plain: true }));

        res.render("dashboard", { questions });
    } catch (err) {
        res.redirect('login');
    }
});

// Guests route
// router.get("/guests", (req, res) => {
//     res.render("guests");
// });

router.get('/guests', async (req, res) => {
    const guestsData = await Guest.findAll().catch((err) => {
        res.json(err);
    });
    const guests = guestsData.map((guest) => guest.get({ plain: true }));
    res.render('guests', { guests });
});

// Questions route
router.get("/questions", (req, res) => {
    res.render("questions");
})

// Signup route
router.get("/signup", (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
        return;
    }

    res.render('signup');
});

module.exports = router;