const express = require("express");
const router = express.Router();

const Issue = require('../../models/Issue');

// @route   GET api/issues/issue/:id
// @desc    Return issue data for a specific issue
// @access  Public
router.get('/issue/:id', (req, res) => {  
  Issue.findById(req.params.id)
    .then(issue => res.json(issue))
    .catch(err =>
      res.status(404).json({ noissuefound: 'No issue found with that ID' })
    );
});

// @route   GET api/issues/issues
// @desc    Return all issue data
// @access  Public
router.get('/issues', (req, res) => {
  Issue.find()
    .then(issuesRaw => {
      // Sort issues into topics
      var issues = {};
      for (let i = 0; i < issuesRaw.length; i++) {
        let issue = issuesRaw[i];
        if (!issues[issue.topic]) {
          issues[issue.topic] = [];
        }
        issues[issue.topic].push(issue);
      }
      res.json(issues)
    })
    .catch(err => 
      res.status(404).json({ noissuesfound: 'No issues found' })
    );
});

module.exports = router;
