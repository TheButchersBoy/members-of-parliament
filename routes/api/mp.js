const express = require("express");
const router = express.Router();

const Mp = require('../../models/Mp');
const Postcode = require('../../models/Postcode');

// @route   GET api/mp/mps
// @desc    Return all mps
// @access  Public
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
  Postcode.findOne({ postcode: req.params.postcode })
    .then(postcode => { 
      console.log(postcode);
      Mp.findById(postcode.mpId)
        .then(mp => res.json(mp))
        .catch(err =>
          res.status(404).json({ nompfound: 'No mp found with that ID' })
        );
    })
    .catch(err =>
      res.status(404).json({ nompfound: 'No mp found with that Postcode' })
    );
});

module.exports = router;
