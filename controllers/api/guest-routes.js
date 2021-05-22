const router = require("express").Router();
const Guest = require("../../models/Guest.js"); //referencing the Guest model

router.post('/', async (req, res) => {
    try {
        const guestData = await Guest.create({
            guestName: req.body.guestName,
            foodChoice: req.body.foodChoice,
            userId: req.session.userId
        });
        res.status(200).json(guestData)
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;