const express = require("express");
const router = express.Router();

const Issue = require('../../models/Issue');

// @route   GET api/issues/issue/:id
// @desc    Get issue data for a specific issue
// @access  Public
//router.get('issues/issue:id', (req, res) => {
router.get('/issue/:id', (req, res) => {  
  console.log('**************: ' + req.params.id);
  Issue.findById(req.params.id)
    .then(issue => res.json(issue))
    .catch(err =>
      res.status(404).json({ noissuefound: 'No issue found with that ID' })
    );
});

// @route   GET api/issues/issues
// @desc    Get all issue data
// @access  Public
//router.get('issues/issues', (req, res) => {
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
