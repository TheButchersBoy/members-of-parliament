const express = require("express");
const router = express.Router();

const Mp = require('../../models/Mp');

// router.post('/postIssue', (req, res) => {
//   console.log("POST ISSUE!");
//   console.log(req);
//   const newIssue = new Issue({
//     title: req.body.title,
//     description: req.body.description,
//     topic: req.body.topic,
//     billUrl: req.body.billUrl,
//     votesFor: req.body.votesFor,
//     votesAgainst: req.body.votesAgainst,
//   });

//   newIssue.save().then(issue => res.json(issue));
// });

// @route   GET api/mp/mps
// @desc    Return all mps
// @access  Public
//router.get('/mps', (req, res) => {
router.get('/mps', (req, res) => {
  Mp.find()
    .then(mps => res.json(mps))
    .catch(err =>
      res.status(404).json({ nompsfound: 'No mps found' })
    );
});

// @route   GET api/mp/mp/:id
// @desc    Return an mp with a matching ID
// @access  Public
router.get('/mp/:id', (req, res) => {
  Mp.findById(req.params.id)
    .then(mp => res.json(mp))
    .catch(err =>
      res.status(404).json({ nompfound: 'No mp found with that ID' })
    );
});

// @route   GET api/mp/mp/postcode/:postcode
// @desc    Return an mp with a matching Postcode
// @access  Public
router.get('/mp/postcode/:postcode', (req, res) => {
  // TODO: Get corresponding postcode. If data dump doesn't work let's just add a few ourselves and only search for those MPs
  
  // Mp.findById(req.params.postcode)
  //   .then(mp => res.json(mp))
  //   .catch(err =>
  //     res.status(404).json({ nompfound: 'No mp found with that Postcode' })
  //   );
});

module.exports = router;
