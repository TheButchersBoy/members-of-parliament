const express = require("express");
const router = express.Router();


// @route   GET api/mp/mps
// @desc    Return all mps
// @access  Public
//router.get('/mps', (req, res) => {
router.get('/mps', (req, res) => {

  console.log('ininin');

  // Mock data
  const mps = [
    {
      id: 0,
      name: 'Tony',
      party: 'Liberal'
    },
    {
      id: 1,
      name: 'Tony',
      party: 'Labour'
    },
    {
      id: 2,
      name: 'Tony',
      party: 'Labour'
    },
    {
      id: 3,
      name: 'Tony',
      party: 'Liberal'
    },
    {
      id: 4,
      name: 'Tony',
      party: 'Labour'
    },
    {
      id: 5,
      name: 'Tony',
      party: 'Liberal'
    },
    {
      id: 6,
      name: 'Tony',
      party: 'Liberal'
    },
    {
      id: 7,
      name: 'Tony',
      party: 'Liberal'
    },
    {
      id: 8,
      name: 'Tony',
      party: 'Liberal'
    },
    {
      id: 9,
      name: 'Tony',
      party: 'Labour'
    }
  ]; 

  res.send({mps});
});


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
//router.get('/getData/:postcode', (req, res) => {
router.get('/getData', (req, res) => {
  const postcode = req.query.postcode;
  var issues = {};

  // TODO
  // 1. get mp data from MP table based on Postcode
  // 2. get topics data from Topic table
  // 3. filter issues, construct based on topic sorted by most issues.
  // 3. return


  const mpData = {
    id: 0,
    name: 'Tony',
    party: 'Liberal'
  }  

  const issueData = [
    {
      id: 0,
      topic: 'IT',
      title: 'Restricting consumer use of 3D printers',
      description: 'blah blah blah',
      votesFor: [
        0,
        2,
        4
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
        5
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
        5
      ],
    },
  ]

  // Sort issues into topics
  for (let i = 0; i < issueData.length; i++) {
    let issue = issueData[i];
    if (!issues[issue.topic]) {
      issues[issue.topic] = [];
    }
    issues[issue.topic].push(issue);
  }

  res.send({mpData, issues});
});

module.exports = router;
