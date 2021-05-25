const router = require("express").Router();
// const { Guest, Questions, Info } = require("../models");
const withAuth = require('../utils/auth');
const Questions = require("../models/Questions");
const Guest = require("../models/Guest");
const Info = require("../models/Info")

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
router.get('/home', withAuth, async (req, res) => {
    try {

        const guestsData = await Guest.findAll({
            where: {
                userId: req.session.userId
            }
        });

        const infoData = await Info.findAll({
            where: {
                userId: req.session.userId
            }
        });

        const questionsData = await Questions.findAll({
            where: {
                userId: req.session.userId
            }
        });

        console.log(questionsData)
        console.log(infoData)

        const guests = guestsData.map((guest) => guest.get({ plain: true }));
        const info = infoData.map((information) => information.get({ plain: true }))[0];
        const questions = questionsData.map((question) => question.get({ plain: true }))[0];
        // const questions = questionsData.map((quest) => quest.get({ plain: true }));
        res.render('home', { questions, guests, info });
    } catch (err) {
        res.status(500).json(err)
    }
});

// Dashboard route
router.get('/dashboard', withAuth, async (req, res) => {
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
router.get('/guests', withAuth, async (req, res) => {
    const guestsData = await Guest.findAll().catch((err) => {
        res.json(err);
    });
    const guests = guestsData.map((guest) => guest.get({ plain: true }));
    res.render('guests', { guests });
});

// Questions route
router.get("/questions", withAuth, (req, res) => {
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