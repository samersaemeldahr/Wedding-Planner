const router = require("express").Router();
const { Guests, Questions, Info } = require("../models");

router.get("/", async (req, res) => {
    try {
        if (req.session.logged) {
            res.redirect("/home")
        } else {
            res.render("login")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get("/home", async (req, res) => {
    try {
        const homeData = await Questions.findAll();
        const guestData = await Guests.findAll();
        const infoData = await Info.findAll();

        // we might need to map all the data
        const allModels = { homeData, guestData, infoData };

        const data = allModels.map((dataInfo) => dataInfo.get ({ plain: true}));

        res.render("home", { data })
    } catch (err) {
        res.status(500).json(err)
    }
})