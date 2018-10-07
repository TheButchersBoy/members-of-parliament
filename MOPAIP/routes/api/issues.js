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

module.exports = router;
