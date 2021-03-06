const router = require("express").Router();
const withAuth = require('../../utils/auth');
const Questions = require("../../models/Questions.js"); //referencing the Questions model

router.post('/', withAuth, async (req, res) => {
    try {
        const questions = await Questions.create({
            firstName: req.body.firstName,
            spouseName: req.body.spouseName,
            weddingDate: req.body.weddingDate,
            venueName: req.body.venueName,
            venueLocation: req.body.venueLocation,
            userId: req.session.userId
        });
        res.json(questions);
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.put('/', withAuth, async (req, res) => {
//     try {
//         const questions = await Questions.update({
//             firstName: req.body.firstName,
//             spouseName: req.body.spouseName,
//             weddingDate: req.body.weddingDate,
//             venueName: req.body.venueName,
//             venueLocation: req.body.venueLocation
//         }
//             , {
//                 where: {
//                     userId: req.session.userId
//                 }
//             }
//         );
//         res.status(200).end(questions)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.put('/:id', withAuth, async (req, res) => {
    try {
      const [questionsData] = await Questions.update(req.body, {
        where: {
          userId: req.params.userId,
        },
      });
  
      if (questionsData > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router
