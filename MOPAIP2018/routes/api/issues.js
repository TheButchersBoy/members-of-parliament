const express = require("express");
const router = express.Router();

// @route   GET api/issues/issue:id
// @desc    Get issue data for a specific issue
// @access  Public
//router.get('issues/issue:id', (req, res) => {
router.get('/issue', (req, res) => {
  const id = req.query.id;

  // TODO 
  //  1. Get issue data based on id 
  //  2. Add MP data for each id in votesFor and votesAgainst?
  //  3. Return data

  // Mock data 
  const issueData = {
    id: 2,
    topic: 'IT',
    title: 'Banning library computers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada rutrum sem non tempor. Praesent dictum interdum fringilla. Nulla cursus eu dui at porta. Duis feugiat enim quis enim hendrerit ullamcorper. Ut venenatis justo et bibendum suscipit. Praesent in tempus sem, egestas rhoncus ante.',
    billUrl: 'https://www.google.com',
    votesFor: [
      0,
      2,
      4,
      6,
      7,
      8,
      9,
      10
    ],
    votesAgainst: [
      1,
      3,
      5
    ],
  }
  
  res.send({issueData});
});

// @route   GET api/issues/issues
// @desc    Get all issue data
// @access  Public
//router.get('issues/issues', (req, res) => {
router.get('/issues', (req, res) => {
  var issues = {};

  // Mock data 
  const issuesData = [
    {
      id: 0,
      topic: 'IT',
      title: 'Restricting consumer use of 3D printers',
      description: 'blah blah blah',
      votesFor: [
        0,
        2,
        4,
        6
      ],
      votesAgainst: [
        1,
        3,
        5
      ],
    },
    {
      id: 1,
      topic: 'Health',
      title: 'Some issue about health',
      description: 'blah blah blah',
      votesFor: [
        1,
        3,
        5,
        6
      ],
      votesAgainst: [
        0,
        2,
        4
      ],
    },
    {
      id: 2,
      topic: 'IT',
      title: 'Banning library computers',
      description: 'blah blah blah',
      votesFor: [
        0,
        2,
        4
      ],
      votesAgainst: [
        1,
        3,
        5,
        6
      ],
    },
  ]

  // Sort issues into topics
  for (let i = 0; i < issuesData.length; i++) {
    let issue = issuesData[i];
    if (!issues[issue.topic]) {
      issues[issue.topic] = [];
    }
    issues[issue.topic].push(issue);
  }

  res.send({issues});  
});

module.exports = router;
