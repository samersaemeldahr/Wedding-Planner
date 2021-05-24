const router = require("express").Router();
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
});

// exporting 
module.exports = router; 