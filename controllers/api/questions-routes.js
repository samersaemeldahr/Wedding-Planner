const router = require("express").Router();
const Questions = require("../../models/Questions.js"); //referencing the Questions model

router.post('/', /* withAuth, */ async (req, res) => {
    try {
        const questions = await Questions.create({
            firstName: req.body.firstName,
            spouseName: req.body.spouseName,
            weddingDate: req.body.weddingDate,
            venueName: req.body.venueName,
            venueLocation: req.body.venueLocation
        });
        res.json(questions);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router